const SEO = {
  canonical: "CompanyUrl",
  title: "CompanyName — ShortSlogan",
  titleTemplate: "%s - CompanyName",
  description: "CompanyDescription",
  openGraph: {
    title: "CompanyName — ShortSlogan",
    description: "CompanyDescription",
    type: "website",
    locale: "en_IE",
    url: "CompanyUrl",
    site_name: "CompanyName — ShortSlogan",
    images: [
      {
        url: "/banner.png",
        width: 1500,
        height: 500,
        alt: "CompanyName Showcase",
      },
    ],
  },
  twitter: {
    handle: "@CompanyName",
    site: "@CompanyName",
    cardType: "summary_large_image",
  },
};

export default SEO;
