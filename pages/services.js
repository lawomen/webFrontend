import Image from "next/image";
import MarkdownIt from "markdown-it";

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
  const md = MarkdownIt({ html: true, breaks: true });
  const parsedPaidDesc = md.render(apiRes.paid_desc);
  const parsedFreeDesc = md.render(apiRes.free_desc);

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
          <div className={style.imgCont}>
            <Image
              width={500}
              height={500 * (apiRes.paid_img.height / apiRes.paid_img.width)}
              src={apiRes.paid_img.url}
              alt={apiRes.paid_img.alternativeText}
            />
          </div>
          <div
            className={style.contentP}
            dangerouslySetInnerHTML={{ __html: parsedPaidDesc }}
          />
        </div>

        <div id="community" className={style.freeCont}>
          <h2 className={style.secTitle}>{apiRes.free_title}</h2>
          <div className={style.imgCont}>
            <Image
              width={500}
              height={500 * (apiRes.free_img.height / apiRes.free_img.width)}
              src={apiRes.free_img.url}
              alt={apiRes.free_img.alternativeText}
            />
          </div>
          <div
            className={style.contentP}
            dangerouslySetInnerHTML={{ __html: parsedFreeDesc }}
          />
        </div>
      </section>
    </Layout>
  );
}

export default services;
