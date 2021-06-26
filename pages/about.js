import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/about.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      apiRes: {},
      ...(await serverSideTranslations(locale, [
        "common",
        "landing",
        "nav",
        "contact",
        "footer",
      ])),
    },
  };
}

function allBlogs({ apiRes }) {
  const t1 = useTranslation("landing");
  const t2 = useTranslation("common");

  return (
    <Layout>
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
        <h1>About</h1>
        <p>LaWomen is [content here]</p>
      </section>

      <section className={style.mainCont}>
        <h3>About page, section [...]</h3>
        <h1>{t2.t("companyName")}</h1>
      </section>
    </Layout>
  );
}

export default allBlogs;
