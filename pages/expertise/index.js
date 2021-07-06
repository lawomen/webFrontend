import Image from "next/image";

import Layout from "../../components/Layout";
import style from "../../styles/expertise.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawExpertise = await fetch(
    `https://lawomen-admin.herokuapp.com/exper?_locale=${locale}`
  );
  const expertiseRes = await rawExpertise.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...expertiseRes };

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
          src="/peoplePic4.jpeg"
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
        <h3>{apiRes.content}</h3>
      </section>
    </Layout>
  );
}

export default allBlogs;
