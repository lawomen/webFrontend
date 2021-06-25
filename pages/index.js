import Layout from "./../components/Layout";
import FormikForm from "../components/landing/FormikForm";
import LawArea from "../components/landing/LawArea";
import WhyLawomen from "../components/landing/WhyLawomen";
import Team from "../components/landing/Team";

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
          quality={10}
          priority
        />
        <div className={homeStyle.overlay}>
          <div className={homeStyle.mainTagline}>
            <h1>{t2.t("companyName")}</h1>
            <h2>{apiRes.tagline}</h2>
            <h3>{apiRes.landingDesc}</h3>
          </div>
        </div>
      </section>
      <section>
        <LawArea />
      </section>
      <section>
        <WhyLawomen />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <h3>Let us know how we can help</h3>
        <FormikForm />
      </section>
    </Layout>
  );
}

export default Home;
