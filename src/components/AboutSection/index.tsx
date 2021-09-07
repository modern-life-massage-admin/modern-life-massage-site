import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import AboutPageData from "../../../content/aboutpage.json";

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { regex: "/about_hero/" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `}
    render={(data) => {
      const heroImage = getImage(data.heroImage);
      const { aboutCopy, licenseLinkAddress, licenseLinkText } = AboutPageData;
      return (
        <section className="about-section">
          <div className="about-section__content">
            <h2>About Us</h2>
            <p>{aboutCopy}</p>

            <div className="about-section__link">
              <a href={licenseLinkAddress}>{licenseLinkText}</a>
            </div>
          </div>
          <div className="about-section__hero">
            <GatsbyImage image={heroImage} alt="Hero Image" />
          </div>
        </section>
      );
    }}
  />
);

export default AboutPage;
