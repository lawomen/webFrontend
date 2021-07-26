import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/photos.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawAbout = await fetch(
    `https://lawomen-admin.herokuapp.com/about?_locale=${locale}`
  );
  const aboutRes = await rawAbout.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...aboutRes };

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

      <section className={style.mainCont}>
        <div className={style.galleryCont}>

        </div>
      </section>
    </Layout>
  );
}

export default allBlogs;
