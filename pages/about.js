import Image from "next/image";
import MarkdownIt from "markdown-it";

import Layout from "../components/Layout";
import style from "../styles/about.module.css";

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
  const md = MarkdownIt({ html: true, breaks: true });
  const parsedAboutContent = md.render(apiRes.about_content);

  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>
      <div className={style.backdrop}>
        <Image
          alt="Women writing"
          src="/writing.jpeg"
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
        <div className={style.imgCont}>
          <Image
            width={apiRes.about_img.width}
            height={apiRes.about_img.height}
            src={apiRes.about_img.url}
            alt={apiRes.about_img.alternativeText}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: parsedAboutContent }} />
      </section>
    </Layout>
  );
}

export default allBlogs;
