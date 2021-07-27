import { useRef } from "react";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

import Layout from "./../components/Layout";
import FormikForm from "../components/landing/FormikForm";
import LawArea from "../components/landing/LawArea";
import WhyLawomen from "../components/landing/WhyLawomen";
import Impact from "../components/landing/Impact";
import People from "../components/landing/People";
import Testimonials from "../components/landing/Testimonials";

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

  const rawLawArea = await fetch(
    `https://lawomen-admin.herokuapp.com/law-area-entries?_locale=${locale}`
  );

  const allLawArea = await rawLawArea.json();

  const landingLawArea = allLawArea.filter((ele) => {
    return ele.on_landing === true;
  });

  const rawPeople = await fetch(
    `https://lawomen-admin.herokuapp.com/people?_locale=${locale}`
  );
  const allPeople = await rawPeople.json();

  const landingPeople = allPeople.filter((ele) => {
    return ele.on_landing === true;
  });

  const rawTestimonials = await fetch(
    `https://lawomen-admin.herokuapp.com/testimonials?_locale=${locale}`
  );
  const allTestimonials = await rawTestimonials.json();

  const landingTestimonials = allTestimonials.filter((ele) => {
    return ele.on_landing === true;
  });

  const apiRes = {
    ...footerRes,
    ...landingRes,
    landingLawArea,
    landingPeople,
    landingTestimonials,
  };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, [
        "common",
        "nav",
        "contact",
        "footer",
      ])),
    },
  };
}

function Home({ apiRes }) {
  const { t } = useTranslation("common");

  const contactUs = useRef(null);

  return (
    <Layout
      content={apiRes}
    >
      <section className={homeStyle.backdrop}>
        <div className={homeStyle.landingCont}>
          <h1 className={homeStyle.titleContent}>{t("companyName")}</h1>
          <div className={homeStyle.mainContent}>
            <h2 className={homeStyle.subtitle}>{apiRes.tagline_title}</h2>
            <h3 className={homeStyle.desc}>{apiRes.tagline_desc}</h3>
            <a
              href={apiRes.contactLink}
              className={`${homeStyle.button} ${homeStyle.contactBtn}`}
            >
              <BsFillCaretRightFill size={27} />
              {apiRes.contactBtn}
            </a>
          </div>
          <div className={homeStyle.donateContent}>
            <h2 className={homeStyle.subtitle}>{apiRes.donate_title}</h2>
            <h3 className={homeStyle.desc}>{apiRes.donate_desc}</h3>
            <Link href={apiRes.donateLink}>
              <button className={homeStyle.button}>{apiRes.donateBtn}</button>
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
        <LawArea content={apiRes.landingLawArea} />
      </section>

      <section>
        <WhyLawomen content={apiRes} />
      </section>

      <section>
        <Impact content={apiRes} />
      </section>

      <section>
        <Testimonials content={apiRes.landingTestimonials} />
      </section>

      <section>
        <People content={apiRes.landingPeople} applyContent={apiRes} />
      </section>

      <section className={homeStyle.contactCont} ref={contactUs}>
        <h3>{apiRes.contactTitle}</h3>
        <FormikForm />
      </section>
    </Layout>
  );
}

export default Home;
