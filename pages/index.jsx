import loadable from "@loadable/component";
import { NextSeo } from "next-seo";

const Head = loadable(() => import("next/head"));
const Shell = loadable(() => import("@/components/Shell"));
const Hero = loadable(() => import("@/components/Hero"));
const LayoutGA = loadable(() => import("@/components/LayoutGA"));

const Home = () => {
  return (
    <LayoutGA>
      <body className="text-black bg-white dark:bg-black dark:text-white">
        <Shell>
          <div>
            <Head>
              {/* Use https://metatags.io for this */}
              <link rel="icon" href="./favicon.ico" />
              <meta name="keywords" content="CompanyName, ShortSlogan" />
              <title>CompanyName | ShortSlogan</title>
              <meta name="theme-color" content="#CompanyColor" />
              <meta name="title" content="CompanyName — ShortSlogan" />
              <meta name="description" content="CompanyDescription" />

              <meta property="og:type" content="website" />
              <meta
                property="og:site_name"
                content="CompanyName | ShortSlogan"
              />
              <meta property="og:url" content="CompanyUrl" />
              <meta property="og:title" content="CompanyName — ShortSlogan" />
              <meta property="og:description" content="CompanyDescription" />
              {/* Use something like https://og-image.wzulfikar.com/ for this */}
              <meta property="og:image" content="CompanyImage" />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="CompanyUrl" />
              <meta
                property="twitter:title"
                content="CompanyName | ShortSlogan"
              />
              <meta
                property="twitter:description"
                content="CompanyDescription"
              />
              {/* Use something like https://og-image.wzulfikar.com/ for this */}
              <meta property="twitter:image" content="CompanyImage" />
            </Head>
            <NextSeo
              title="CompanyName - Home"
              description="CompanyDescription"
            />
            <div className="flex flex-col items-start justify-center mx-auto mb-16">
              <Hero />
            </div>
          </div>
        </Shell>
      </body>
    </LayoutGA>
  );
};

export default Home;
