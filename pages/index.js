import Layout from "./../components/Layout";
import FormikForm from "../components/FormikForm";
import { useEffect } from "react";
import Image from "next/image";
import homeStyle from "../styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  const rawLanding = await fetch(
    `https://lawomen-admin.herokuapp.com/landing-page?_locale=${locale}`
  );
  const resLanding = await rawLanding.json();

  return {
    props: {
      apiRes: {
        tagline: resLanding.tagline,
        landingDesc: resLanding.landingDesc,
      },
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

function Home({ apiRes }) {
  const t1 = useTranslation("landing");
  const t2 = useTranslation("common");

  useEffect(() => {
    // to call the heroku, deal with cold start so form submit is faster
    try {
      fetch("https://lawomen-admin.herokuapp.com/landing-page");
    } catch {}
  }, []);

  return (
    <Layout>
      <section className={homeStyle.backdrop}>
        <Image
          alt="Decorative background image of library"
          src="/unsplashHomeTemp.jpg"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={homeStyle.overlay}>
          <div className={homeStyle.mainTagline}>
            <h1>{t2.t("companyName")}</h1>
            <h3> Testing Git Branching!!</h3>
            <h3>Some specific feature, need to test</h3>
            <h2>{apiRes.tagline}</h2>
            <h3>{apiRes.landingDesc}</h3>
          </div>
        </div>
      </section>
      <section className={homeStyle.mainCont}>
        <div className={homeStyle.card}>
          <h2>{t1.t("contactTitle")}</h2>
          <FormikForm />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
