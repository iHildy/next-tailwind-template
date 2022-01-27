import "../styles/globals.css";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Head className="scroll-smooth">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body className="scroll-smooth bg-background">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </body>
    </>
  );
}
