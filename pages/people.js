import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/people.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawPeoplePage = await fetch(
    `https://lawomen-admin.herokuapp.com/people-page?_locale=${locale}`
  );
  const peoplePage = await rawPeoplePage.json();

  const rawPeople = await fetch(
    `https://lawomen-admin.herokuapp.com/people?_locale=${locale}`
  );
  const allPeople = await rawPeople.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...peoplePage, allPeople };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes }) {
  const firmPeople = apiRes.allPeople.filter((ele) => {
    return ele.type === "firm";
  });

  const fellowPeople = apiRes.allPeople.filter((ele) => {
    return ele.type === "fellow";
  });

  const teamPeople = apiRes.allPeople.filter((ele) => {
    return ele.type === "team";
  });


  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>
      <div className={style.backdrop}>
        <Image
          alt="Decorative background image of library"
          src="/unsplashHomeTemp.jpg"
          layout="fill"
          objectFit="cover"
          quality={10}
          priority
        />
      </div>

      <section className={style.overlay}>
        <h1>{apiRes.title}</h1>
        <p>{apiRes.short_desc}</p>
      </section>

      <section className={style.mainCont}>
        <div id="lawomen" className={style.lawomenSec}>
          <h1 className={style.secTitle}>{apiRes.lawomenTeamTitle}</h1>
          <p>{apiRes.lawomenTeamDesc}</p>
          <div className={style.cardCont}>
            {teamPeople.map((ele) => {
              return (
                <div key={ele.id} className={style.cards}>
                  <div className={style.cardsImg}>
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={ele.image.url}
                      alt={ele.image.alternativeText}
                    />
                  </div>
                  <p className={style.cardSubtitle}>{ele.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div id="firms" className={style.firmSec}>
          <h1 className={style.secTitle}>{apiRes.firmsTitle}</h1>
          <p>{apiRes.firmsDesc}</p>
          <div className={style.cardCont}>
            {firmPeople.map((ele) => {
              return (
                <div key={ele.id} className={style.cards}>
                  <div className={style.cardsImg}>
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={ele.image.url}
                      alt={ele.image.alternativeText}
                    />
                  </div>
                  <p className={style.cardSubtitle}>{ele.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div id="fellows" className={style.fellows}>
          <h1 className={style.secTitle}>{apiRes.fellowsTitle}</h1>
          <p>{apiRes.fellowsDesc}</p>
          <div className={style.cardCont}>
            {fellowPeople.map((ele) => {
              return (
                <div key={ele.id} className={style.cards}>
                  <div className={style.cardsImg}>
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={ele.image.url}
                      alt={ele.image.alternativeText}
                    />
                  </div>
                  <p className={style.cardSubtitle}>{ele.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default allBlogs;
