import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/people.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawCases = await fetch(
    `https://lawomen-admin.herokuapp.com/cases?_locale=${locale}`
  );
  const caseRes = await rawCases.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...caseRes };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes }) {
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
          <h1 className={style.secTitle}>The LaWomen Team</h1>
          <div className={style.cardCont}>
            <div className={style.cards}>
              <div className={style.cardsImg}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/TempkravisLabLogo.png"
                  alt="Kravis Lab Logo"
                />
              </div>
              <p className={style.cardSubtitle}>Kravis Lab</p>
            </div>
          </div>
        </div>
        <div id="firms" className={style.firmSec}>
          <h1 className={style.secTitle}>Partnering Firms</h1>
          <div className={style.cardCont}>
            <div className={style.cards}>
              <div className={style.cardsImg}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/TempkravisLabLogo.png"
                  alt="Kravis Lab Logo"
                />
              </div>
              <p className={style.cardSubtitle}>Kravis Lab</p>
            </div>
          </div>
        </div>
        <div id="fellows" className={style.fellows}>
          <h1 className={style.secTitle}>LaWomen Fellows</h1>
          <div className={style.cardCont}>
            <div className={style.cards}>
              <div className={style.cardsImg}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/TempkravisLabLogo.png"
                  alt="Kravis Lab Logo"
                />
              </div>
              <p className={style.cardSubtitle}>Kravis Lab</p>
            </div>

            <div className={style.cards}>
              <div className={style.cardsImg}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/TempkravisLabLogo.png"
                  alt="Kravis Lab Logo"
                />
              </div>
              <p className={style.cardSubtitle}>Kravis Lab</p>
            </div>

            <div className={style.cards}>
              <div className={style.cardsImg}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/TempkravisLabLogo.png"
                  alt="Kravis Lab Logo"
                />
              </div>
              <p className={style.cardSubtitle}>Kravis Lab</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default allBlogs;
