import Image from "next/image";

import Layout from "../components/Layout";
import style from "../styles/patrons.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  const rawPeople = await fetch(
    `https://lawomen-admin.herokuapp.com/people?_locale=${locale}`
  );
  const allPeopleRes = await rawPeople.json();

  const patronsRes = allPeopleRes.filter((ele) => {
    return ele.type === "patron";
  });

  const rawPatronsPage = await fetch(
    `https://lawomen-admin.herokuapp.com/patrons-page?_locale=${locale}`
  );
  const patronsPageRes = await rawPatronsPage.json();

  const rawFooter = await fetch(
    `https://lawomen-admin.herokuapp.com/footer?_locale=${locale}`
  );
  const footerRes = await rawFooter.json();

  const apiRes = { ...footerRes, patronsRes, ...patronsPageRes };

  return {
    props: {
      apiRes,
      ...(await serverSideTranslations(locale, ["common", "nav", "footer"])),
    },
  };
}

function patrons({ apiRes }) {
  return (
    <Layout content={apiRes}>
      <div className={style.landedNavCont}></div>
      <div className={style.backdrop}>
        <Image
          alt="Four women talking at table."
          src="/tableTalk.jpeg"
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
        {apiRes.patronsRes.map((ele) => {
          return (
            <div className={style.card} key={ele.id}>
              <h3>{ele.name}</h3>
              <div className={style.cardsImg}>
                <Image
                  height={90}
                  width={90*(ele.image.width/ele.image.height)}
                  src={ele.image.url}
                  alt={ele.image.alternativeText}
                />
              </div>
              <p>{ele.desc}</p>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

export default patrons;
