import Layout from "../../components/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      apiRes: {},
      ...(await serverSideTranslations(locale, [
        "common",
        "landing",
        "nav",
        "contact",
        "footer",
      ])),
    },
  };
}

function allBlogs({ apiRes }) {
  const t1 = useTranslation("landing");
  const t2 = useTranslation("common");

  return (
    <Layout>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "150px",
          top: 0,
          backgroundColor: "blue",
        }}
      ></div>
      <div style={{marginTop: '150px'}}>
        <h3>all Blogs</h3>
        <h1>{t2.t("companyName")}</h1>
      </div>
    </Layout>
  );
}

export default allBlogs;
