import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function SEO(props) {
  const { ...customMeta } = props;
  const Year = new Date();
  const anio = Year.getFullYear();
  const meta = {
    title: "News Moments",
    description: `Si criticas lo que no te gusta, porque no vas a usar News Moments Noticias App. Úsala para reclamar mas limpieza, una mejor atención, un mejor trato, o cualquier problema que creas que pueda ser noticia de actualidad, además puedes ganar dinero con las noticias que compartas`,
    key: `News Moment, momento de noticias, tu momento, de noticias, que es News Moment en español, cerca de mi, #NewsMoment`,
    url: `localhost:3000`,
    author: `Topgambajrjdeveloper @DCordenadas`,
    image: "/avatar_julian.png",
    type: "website - app",
    date: 2023 | { anio },
    ...customMeta,
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            {meta.title
              ? `${meta.title} | News Moments App`
              : `${meta.title} | News Moments App`}
          </title>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.key} />
          <meta name="author" content={meta.author} />
          <meta name="copyright" content={meta.date} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          {/* <meta
          property="og:url"
          content={`https://${meta.url}${router.asPath}`}
        />
        <link rel="canonical" href={`https://${meta.url}${router.asPath}`} /> */}
          {/* <link rel='manifest' href='/static/manifest.json' /> */}
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DCordenadas" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default SEO;
