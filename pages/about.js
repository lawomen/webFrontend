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
  const md = MarkdownIt();
  const parsedMission = md.render(apiRes.missionDesc);
  const parsedStory = md.render(apiRes.storyDesc);
  const parsedVision = md.render(apiRes.visionDesc);

  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>
      <div className={style.backdrop}>
        <Image
          alt="Decorative background image of people in the street"
          src="/zoom.jpeg"
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
        <h1>{apiRes.missionTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: parsedMission }} />
        <h1>{apiRes.storyTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: parsedStory }} />
        <h1>{apiRes.visionTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: parsedVision }} />
        
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

export default allBlogs;
