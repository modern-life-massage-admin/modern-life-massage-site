import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
      return (
        <section className="about-section">
          <div className="about-section__content">
            <h2>About Us</h2>
            <p>
              Who we are. Our journey . Why we are passionate about massage. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta su.
            </p>
            <p>
              All of our therapists are fully insured and licensed massage
              therapists for the state of Kentucky, as well as being members of
              the American Massage Therapy Association in good standing.
            </p>
            <div className="about-section__link">
              <a href="#">View Our License</a>
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
