import Image from "next/image";

import Layout from "../../components/Layout";
import style from "../../styles/blog.module.css";
import BlogCard from "../../components/blog/BlogCard";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawBlog = await fetch(
    `https://lawomen-admin.herokuapp.com/blog?_locale=${locale}`
  );
  const blogRes = await rawBlog.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const rawBlogEntry = await fetch(
    `https://lawomen-admin.herokuapp.com/blog-entries?_locale=${locale}&_sort=date_created:DESC`
  );

  const blogEntry = await rawBlogEntry.json();

  const apiRes = { ...footerRes, ...blogRes };

  return {
    props: {
      apiRes,
      blogEntry,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function allBlogs({ apiRes, blogEntry }) {

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
          alt="Decorative background image of people discussing"
          src="/klabEvent2.jpeg"
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
        <div className={style.cardCont}>
          {blogEntry.map(({ id, subpath, title, date_created, picture, blog_short_desc }) => (
            <BlogCard
              key={id}
              subpath={subpath}
              title={title}
              date_created={date_created}
              picture={picture}
              blog_short_desc={blog_short_desc}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default allBlogs;
