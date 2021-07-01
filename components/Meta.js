import Head from "next/head";

function Meta() {
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="ur" href="http://lawomen.pk/ur" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Pakistan. Legal services with a social cause. For the women, by the women."
        />
         <meta name="keywords" content="Pakistan, Pakistan law, women in law, law, lawyers, women rights, legal services"></meta>
        <meta property="og:title" content="LaWomen Pakistan" key="ogtitle" />
        <meta
          property="og:description"
          content="Legal services with a social cause. For the women, by the women."
          key="ogdesc"
        />
        <title>LaWomen Pakistan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </>
  );
}

export default Meta;
