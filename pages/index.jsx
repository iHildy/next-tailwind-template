import loadable from "@loadable/component";
import { NextSeo } from "next-seo";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Head = loadable(() => import("next/head"));
const Shell = loadable(() => import("@/components/Shell"));
// const Nav = loadable(() => import("@/components/Nav"));
// const Hero = loadable(() => import("@/components/Hero"));
// const Plans = loadable(() => import("@/components/Plans"));
// const Collab = loadable(() => import("@/components/Collab"));
// const Faq = loadable(() => import("@/components/Faq"));
// const Footer = loadable(() => import("@/components/Footer"));

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      delay: 500,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  });
  return (
    <div className="text-white bg-background scroll-smooth">
      <Shell>
        <div>
          <Head>
            {/* Use https://metatags.io for this */}
            <link rel="icon" href="./favicon.ico" />
            <meta name="keywords" content="CompanyName - ShortSlogan" />
            <title>CompanyName | ShortSlogan</title>
            <meta name="theme-color" content="#4AD8EC" />
            <meta name="title" content="CompanyName — ShortSlogan" />
            <meta name="description" content="CompanyDescription" />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="CompanyName | ShortSlogan" />
            <meta property="og:url" content="CompanyUrl" />
            <meta property="og:title" content="CompanyName — ShortSlogan" />
            <meta property="og:description" content="CompanyDescription" />
            {/* Use something like https://og-image.wzulfikar.com/ for this */}
            <meta
              property="og:image"
              content="https://cdn.discordapp.com/attachments/784637379830218752/933205056902283284/banner.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="CompanyUrl" />
            <meta
              property="twitter:title"
              content="CompanyName | ShortSlogan"
            />
            <meta property="twitter:description" content="CompanyDescription" />
            {/* Use something like https://og-image.wzulfikar.com/ for this */}
            <meta
              property="twitter:image"
              content="https://cdn.discordapp.com/attachments/784637379830218752/933205056902283284/banner.png"
            />
          </Head>
          <NextSeo
            title="CompanyName - Home"
            description="CompanyDescription"
          />
          <div className="w-full mb-16 scroll-smooth">
            {/* <Nav /> */}
            {/* <Hero /> */}
          </div>
          {/* <Footer /> */}
        </div>
      </Shell>
    </div>
  );
}

export default App;
