import MarkdownIt from "markdown-it";
import Layout from "../../components/Layout";
import Image from "next/image";
import style from "../../styles/blogid.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps(context) {
  const rawBlog = await fetch(
    `https://lawomen-admin.herokuapp.com/blog-entries?_locale=${context.locale}&_sort=date_created:DESC&_where[subpath]=${context.params.id}&_limit=1`
  );
  const blogRes = await rawBlog.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${context.locale}`
  );
  const apiRes = await rawFooter.json();

  return {
    props: {
      blogRes: blogRes[0],
      apiRes,
      ...(await serverSideTranslations(context.locale, [
        "common",
        "nav",
        "footer",
      ])),
    },
  };
}

export async function getStaticPaths() {
  const enBlogRaw = await fetch(
    `https://lawomen-admin.herokuapp.com/blog-entries?_locale=en`
  );
  const enBlog = await enBlogRaw.json();

  const urBlogRaw = await fetch(
    `https://lawomen-admin.herokuapp.com/blog-entries?_locale=ur`
  );
  const urBlog = await urBlogRaw.json();

  const enPaths = enBlog.map(({ subpath }) => ({
    params: { id: subpath },
    locale: "en",
  }));
  const urPaths = urBlog.map(({ subpath }) => ({
    params: { id: subpath },
    locale: "ur",
  }));

  const paths = [...enPaths, ...urPaths];

  return {
    paths,
    fallback: false,
  };
}

function blog({ blogRes, apiRes }) {
  const md = MarkdownIt();
  const parsedBlog = md.render(blogRes.blog);
  const parsedSources = md.render(blogRes.sources ? blogRes.sources : "");

  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>

      <section className={style.mainCont}>
        <h1 className={style.title}>{blogRes.title}</h1>
        <div className={style.shortDesc}>
          <p>{blogRes.blog_short_desc}</p>
        </div>

        <div className={style.imageCont}>
          <Image
            alt={blogRes.picture.alternativeText}
            src={blogRes.picture.url}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div
          className={style.mainBlog}
          dangerouslySetInnerHTML={{ __html: parsedBlog }}
        />
        {parsedSources === "" ? (
          ""
        ) : (
          <>
            <h2>Sources</h2>
            <div
              className={style.sources}
              dangerouslySetInnerHTML={{ __html: parsedSources }}
            />
          </>
        )}
      </section>
    </Layout>
  );
}

export default blog;
