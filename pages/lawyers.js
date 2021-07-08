import Image from "next/image";
import { useState, useRef } from "react";
import Layout from "../components/Layout";
import style from "../styles/lawyers.module.css";
import LawyerCard from "../components/lawyers/LawyerCard";

import { RiUserSearchFill } from "react-icons/ri";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawLawyerEntries = await fetch(
    `https://lawomen-admin.herokuapp.com/lawyer-entries?_locale=${locale}`
  );
  const lawyerEntries = await rawLawyerEntries.json();

  const rawLawyers = await fetch(
    `https://lawomen-admin.herokuapp.com/lawyers?_locale=${locale}`
  );
  const lawyerRes = await rawLawyers.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const rawExpertise = await fetch(
    `https://lawomen-admin.herokuapp.com/law-area-entries?_locale=${locale}`
  );

  const allExpertise = await rawExpertise.json();

  const apiRes = { ...footerRes, ...lawyerRes };

  return {
    props: {
      apiRes,
      lawyerEntries,
      allExpertise,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes, lawyerEntries, allExpertise }) {
  const [curLawArea, updateLawArea] = useState("all");
  const [onlyAva, updateOnlyAva] = useState(false);
  const nameInput = useRef(null);
  const [curName, updateCurName] = useState("");
  const [curLawyers, updateCurLawyers] = useState(lawyerEntries);

  function updateSearch() {
    updateCurName(nameInput.current.value);

    let tempListLawyers = lawyerEntries;

    if (curLawArea !== "all") {
      tempListLawyers = tempListLawyers.filter(({ law_area }) => {
        return (
          law_area.find(({ area_title }) => area_title === curLawArea) !==
          undefined
        );
      });
    }
    if (onlyAva !== false) {
      tempListLawyers = tempListLawyers.filter(({ available }) => available);
    }
    if (nameInput.current.value !== "") {
      tempListLawyers = tempListLawyers.filter(({ name }) =>
        name.toLowerCase().includes(nameInput.current.value.toLowerCase())
      );
    }

    updateCurLawyers(tempListLawyers);
  }

  return (
    <Layout
      content={{
        mission_statement: apiRes.mission_statement,
        info_title: apiRes.info_title,
      }}
    >
      <div className={style.landedNavCont}></div>
      <div className={style.backdrop}>
        <Image
          alt="Decorative background image of people meeting"
          src="/peoplemeeting.jpeg"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <section className={style.overlay}>
        <h1>{apiRes.title}</h1>
        <p>{apiRes.short_desc}</p>
      </section>

      <section className={style.mainCont}>
        <div className={style.searchCont}>
          <input ref={nameInput} type="text" placeholder="Search Name:"></input>
          <button className={style.searchButton} onClick={updateSearch}>
            <RiUserSearchFill className={style.searchContIcon} />
          </button>
        </div>

        <div className={style.filterCont}>
          <h3>Filter by:</h3>
          <label className={style.selectLabel} htmlFor="lawAreaSelect">
            Law Area:
          </label>
          <select
            id="lawAreaSelect"
            value={curLawArea}
            onChange={(e) => updateLawArea(e.target.value)}
          >
            <option value="all" selected>
              All
            </option>
            {allExpertise.map(({ id, area_title }) => (
              <option key={id} value={area_title}>
                {area_title}
              </option>
            ))}
          </select>
          <div className={style.avaInput}>
            <label htmlFor="ava">Currently Available</label>
            <input
              id="ava"
              type="checkbox"
              checked={onlyAva}
              onChange={() => updateOnlyAva((prev) => !prev)}
            />
          </div>
          <button className={style.refreshBtn} onClick={updateSearch}>
            Update Results
          </button>
        </div>

        <div className={style.cardCont}>
          {curLawyers.map(({ id, name, law_area, bio, email }) => (
            <LawyerCard
              key={id}
              name={name}
              law_area={law_area}
              bio={bio}
              email={email}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default allBlogs;
