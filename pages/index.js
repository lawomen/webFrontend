import { useEffect, useRef } from "react";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

import Layout from "./../components/Layout";
import FormikForm from "../components/landing/FormikForm";
import LawArea from "../components/landing/LawArea";
import WhyLawomen from "../components/landing/WhyLawomen";
import Impact from "../components/landing/Impact";
import People from "../components/landing/People";

import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiLinkedinFill,
} from "react-icons/ri";

import { BsFillCaretRightFill } from "react-icons/bs";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  const rawLanding = await fetch(
    `https://lawomen-admin.herokuapp.com/landing-page?_locale=${locale}`
  );
  const landingRes = await rawLanding.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const rawExpertise = await fetch(
    `https://lawomen-admin.herokuapp.com/law-area-entries?_locale=${locale}`
  );

  const allExpertiseRes = await rawExpertise.json();

  const landingExp = allExpertiseRes.filter((ele) => {
    return ele.on_landing === true;
  });

  const apiRes = { ...footerRes, ...landingRes, landingExp };

  return {
    props: {
      apiRes,
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

  const contactUs = useRef(null);

  useEffect(() => {
    // to call the heroku, deal with cold start so form submit is faster
    try {
      fetch("https://lawomen-admin.herokuapp.com/landing-page");
    } catch {}
  }, []);

  return (
    <Layout
      content={{
        mission_statement: apiRes.mission_statement,
        info_title: apiRes.info_title,
      }}
    >
      <section className={homeStyle.backdrop}>
        <div className={homeStyle.landingCont}>
          <h1 className={homeStyle.titleContent}>{t2.t("companyName")}</h1>
          <div className={homeStyle.mainContent}>
            <h2 className={homeStyle.subtitle}>{apiRes.tagline_title}</h2>
            <h3 className={homeStyle.desc}>{apiRes.tagline_desc}</h3>
            <a
              className={`${homeStyle.button} ${homeStyle.contactBtn}`}
              onClick={() => {
                contactUs.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <BsFillCaretRightFill size={27} />
              {t1.t("call2action")}
            </a>
          </div>
          <div className={homeStyle.donateContent}>
            <h2 className={homeStyle.subtitle}>{apiRes.donate_title}</h2>
            <h3 className={homeStyle.desc}>{apiRes.donate_desc}</h3>
            <Link href="#">
              <button className={homeStyle.button}>
                {t1.t("call2action2")}
              </button>
            </Link>
          </div>
        </div>
        <div className={homeStyle.socials}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/LawomenPk/"
          >
            <RiFacebookCircleFill size={40} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lawomenpk/"
          >
            <RiInstagramLine size={40} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pk.linkedin.com/company/lawomen"
          >
            <RiLinkedinFill size={40} />
          </a>
        </div>
      </section>

      <section>
        <LawArea content={apiRes.landingExp} />
      </section>

      <section>
        <WhyLawomen content={apiRes} />
      </section>

      <section>
        <Impact content={apiRes} />
      </section>

      <section>
        <People />
      </section>

      <section className={homeStyle.contactCont} ref={contactUs}>
        <h3>{apiRes.contactTitle}</h3>
        <FormikForm />
      </section>

    </Layout>
  );
}

export default Home;
