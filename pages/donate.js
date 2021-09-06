import Image from "next/image";
import MarkdownIt from "markdown-it";

import Layout from "../components/Layout";
import style from "../styles/donate.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawDonate = await fetch(
    `https://lawomen-admin.herokuapp.com/donate-page?_locale=${locale}`
  );
  const donateRes = await rawDonate.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, ...donateRes };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes }) {
  const md = MarkdownIt({ html: true, breaks: true });
  const parsedDonateContent = md.render(apiRes.content);

  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>
      <div className={style.backdrop}>
        <Image
          alt="Women talking"
          src="/personTalk.jpeg"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <section className={style.overlay}>
        <h1>{apiRes.title}</h1>
        <p>{apiRes.shortDesc}</p>
      </section>

      <section className={style.mainCont}>
        <div dangerouslySetInnerHTML={{ __html: parsedDonateContent }} />
      </section>
    </Layout>
  );
}

export default allBlogs;
