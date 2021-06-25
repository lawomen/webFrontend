import Layout from "./../components/Layout";
import FormikForm from "../components/landing/FormikForm";
import LawArea from "../components/landing/LawArea";
import WhyLawomen from "../components/landing/WhyLawomen";
import Team from "../components/landing/Team";

import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiLinkedinFill,
} from "react-icons/ri";

import { BsFillCaretRightFill } from "react-icons/bs";

import { useEffect, useRef } from "react";
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

  const contactUs = useRef(null);

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
            <button
              className={homeStyle.contact}
              onClick={() => {
                contactUs.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              Contact Us
              <BsFillCaretRightFill size={27} />
            </button>
          </div>
        </div>
        <div className={homeStyle.socials}>
          <a target="_blank" href="https://www.facebook.com/LawomenPk/">
            <RiFacebookCircleFill size={40} />
          </a>
          <a target="_blank" href="https://www.instagram.com/lawomenpk/">
            <RiInstagramLine size={40} />
          </a>
          <a target="_blank" href="https://pk.linkedin.com/company/lawomen">
            <RiLinkedinFill size={40} />
          </a>
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

      <section className={homeStyle.contactCont} ref={contactUs}>
        <h3>Let us know how we can help</h3>
        <FormikForm />
      </section>
    </Layout>
  );
}

export default Home;
