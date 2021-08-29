import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "../../images/favicon.png";

type SEOProps = {
  title: string;
  description: string;
  slug: string;
};

const SEO = ({ title, description, slug }: SEOProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
        }
      }
    }
  `);
  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="og:title" content={title} />
      <meta
        name="og:description"
        content={description || data.site.siteMetadata.description}
      />
      <meta name="og:type" content="website" />
      <meta
        name="og:url"
        content={`${data.site.siteMetadata.siteUrl}${slug}`}
      />
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
