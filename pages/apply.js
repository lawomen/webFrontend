import Image from "next/image";
import MarkdownIt from "markdown-it";

import Layout from "../components/Layout";
import style from "../styles/apply.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawApply = await fetch(
    `https://lawomen-admin.herokuapp.com/apply-page?_locale=${locale}`
  );
  const applyRes = await rawApply.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...applyRes };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function apply({ apiRes }) {
  const md = MarkdownIt();
  const parsedContent = md.render(apiRes.content);

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
        <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
        <Image
          width={apiRes.image.width}
          height={apiRes.image.height}
          src={apiRes.image.url}
          alt={apiRes.image.alternativeText}
        />
      </section>
    </Layout>
  );
}

export default apply;
