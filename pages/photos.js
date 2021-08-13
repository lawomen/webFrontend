import Layout from "../components/Layout";
import style from "../styles/photos.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Photo from "../components/Photo";

export async function getStaticProps({ locale }) {
  const rawPictures = await fetch(
    `https://lawomen-admin.herokuapp.com/gallery-entries?_locale=${locale}`
  );
  const pictures = await rawPictures.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, pictures };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes }) {
  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>

      <section className={style.mainCont}>
        <div className={style.galleryCont}>
          {apiRes.pictures.map((ele) => (
            <Photo url={ele.picture.url} alt={ele.desc} key={ele.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default allBlogs;
