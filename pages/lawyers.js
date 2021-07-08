import Image from "next/image";
import Layout from "../components/Layout";
import style from "../styles/lawyers.module.css";
import LawyerCard from "../components/lawyers/lawyerCard";

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

  const apiRes = { ...footerRes, ...lawyerRes };

  return {
    props: {
      apiRes,
      lawyerEntries,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes, lawyerEntries }) {
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
        <div className={style.filterCont}>
          <p>Filters</p>
        </div>

        <div className={style.searchCont}>
          <input type="text" placeholder="Search Name:"></input>
          <button className={style.searchButton}>
            <RiUserSearchFill className={style.searchContIcon} />
          </button>
        </div>

        <div className={style.cardCont}>
          {lawyerEntries.map(({ id, name, areas_of_law, bio, email }) => (
            <LawyerCard
              key={id}
              name={name}
              areas_of_law={areas_of_law}
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
