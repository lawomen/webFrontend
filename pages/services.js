import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/services.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawServicesPage = await fetch(
    `https://lawomen-admin.herokuapp.com/services?_locale=${locale}`
  );
  const servicesRes = await rawServicesPage.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...servicesRes };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function services({ apiRes }) {
  return (
    <Layout content={apiRes}>
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
          <h2 className={style.secTitle}>{apiRes.paid_title}</h2>
          <p>{apiRes.paid_desc}</p>
        </div>

        <div id="community" className={style.freeCont}>
          <h2 className={style.secTitle}>{apiRes.free_title}</h2>
          <p>{apiRes.free_desc}</p>
        </div>
      </section>
    </Layout>
  );
}

export default services;
