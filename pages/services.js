import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/services.module.css";

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

function services({ apiRes }) {
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
          src="/klabEvent1.jpeg"
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
        <div id="paid" className={style.paidCont}>
          <h2 className={style.secTitle}>Paid Services</h2>
          <p>
            Sed dictum, tortor a iaculis ultrices, eros odio egestas quam, eget
            lacinia nisl lacus vel mi. Fusce in eros eu quam fringilla
            elementum. Curabitur finibus, arcu sit amet elementum porta, felis
            lorem iaculis metus, a mattis risus mi eu velit. Aenean quis
            lobortis nibh, a dignissim nisi. Donec facilisis augue ante, in
            venenatis tellus efficitur eu. Morbi nec vehicula augue. Mauris
            lacinia risus at ex vestibulum semper. Integer placerat finibus
            turpis, quis ullamcorper nisi hendrerit ut. Fusce vehicula eros
            nisl, vel placerat arcu tempus nec. Cras et porttitor nulla. Fusce
            id malesuada nulla.
          </p>
        </div>

        <div id="community" className={style.freeCont}>
          <h2 className={style.secTitle}>Free Legal Service for women in need.</h2>
          <p>
            Sed dictum, tortor a iaculis ultrices, eros odio egestas quam, eget
            lacinia nisl lacus vel mi. Fusce in eros eu quam fringilla
            elementum. Curabitur finibus, arcu sit amet elementum porta, felis
            lorem iaculis metus, a mattis risus mi eu velit. Aenean quis
            lobortis nibh, a dignissim nisi. Donec facilisis augue ante, in
            venenatis tellus efficitur eu. Morbi nec vehicula augue. Mauris
            lacinia risus at ex vestibulum semper. Integer placerat finibus
            turpis, quis ullamcorper nisi hendrerit ut. Fusce vehicula eros
            nisl, vel placerat arcu tempus nec. Cras et porttitor nulla. Fusce
            id malesuada nulla.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default services;
