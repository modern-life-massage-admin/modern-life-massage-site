import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const teamInfo = [
  {
    name: "Jeff Butler",
    title: "Owner, Massage Therapist",
    bio: "Sed tempus finibus consectetur. Pellentesque nunc diam, dignissim eget congue in, tincidunt ut nibh. Etiam nulla est, sollicitudin pharetra eleifend a, vehicula nec ante.",
  },
  {
    name: "Jeff Butler",
    title: "Owner, Massage Therapist",
    bio: "Sed tempus finibus consectetur. Pellentesque nunc diam, dignissim eget congue in, tincidunt ut nibh. Etiam nulla est, sollicitudin pharetra eleifend a, vehicula nec ante.",
  },
  {
    name: "Jeff Butler",
    title: "Owner, Massage Therapist",
    bio: "Sed tempus finibus consectetur. Pellentesque nunc diam, dignissim eget congue in, tincidunt ut nibh. Etiam nulla est, sollicitudin pharetra eleifend a, vehicula nec ante.",
  },
];

const TeamSection = () => (
  <StaticQuery
    query={graphql`
      query {
        bioImage: file(relativePath: { regex: "/placeholder_headshot/" }) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 704
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `}
    render={(data) => {
      const bioImage = getImage(data.bioImage);
      return (
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-section__cards">
            {teamInfo.map(({ name, title, bio }) => (
              <div className="team-section__card">
                <GatsbyImage image={bioImage} alt="Hero Image" />
                <h4>{name}</h4>
                <h5>{title}</h5>
                <p>{bio}</p>
              </div>
            ))}
          </div>
          <svg
            width="151"
            height="90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity=".3" fill="#fff">
              <path d="M.34 14.406l.34.366.002-.002.008-.007.031-.029.126-.114a83.71 83.71 0 012.309-2.003 91.011 91.011 0 016.197-4.754c2.478-1.729 5.253-3.45 8.016-4.737C20.139 1.836 22.855 1 25.227 1c4.725 0 8.323 3.309 12.104 6.82l.074.069c3.685 3.421 7.557 7.017 12.71 7.017 5.152 0 9.025-3.596 12.71-7.017l.074-.07C66.679 4.31 70.278 1 75.002 1c4.725 0 8.323 3.309 12.104 6.82l.074.069c3.685 3.421 7.557 7.017 12.71 7.017 5.152 0 9.025-3.596 12.709-7.017l.075-.07C116.455 4.31 120.053 1 124.777 1c2.372 0 5.089.835 7.859 2.126 2.763 1.287 5.538 3.008 8.016 4.737a91.03 91.03 0 018.506 6.757l.125.114.032.03.009.008.341-.366.308-.332.032-.035-.003-.002-.009-.008-.033-.031-.13-.118c-.113-.103-.28-.254-.496-.446a92.028 92.028 0 00-8.11-6.391c-2.505-1.748-5.332-3.503-8.165-4.823C130.233.903 127.361 0 124.777 0c-5.152 0-9.025 3.596-12.709 7.018l-.075.069c-3.781 3.51-7.379 6.82-12.103 6.82-4.725 0-8.323-3.31-12.104-6.82l-.074-.07C84.027 3.597 80.155 0 75.002 0c-5.152 0-9.025 3.596-12.71 7.018l-.074.069c-3.78 3.51-7.379 6.82-12.103 6.82s-8.323-3.31-12.104-6.82l-.074-.07C34.252 3.597 30.38 0 25.227 0c-2.583 0-5.455.903-8.28 2.22-2.834 1.32-5.661 3.075-8.166 4.823A92 92 0 00.174 13.88l-.13.118-.032.03-.011.01s-.001.002.339.368zM.34 39.438l.34.366.002-.002.008-.007.031-.03.126-.114a83.991 83.991 0 012.309-2.003 91.014 91.014 0 016.197-4.753c2.478-1.73 5.253-3.45 8.016-4.738 2.77-1.29 5.486-2.126 7.858-2.126 4.725 0 8.323 3.309 12.104 6.82l.074.069c3.685 3.422 7.557 7.017 12.71 7.017 5.152 0 9.025-3.595 12.71-7.017l.074-.07c3.78-3.51 7.379-6.819 12.103-6.819 4.725 0 8.323 3.309 12.104 6.82l.074.069c3.685 3.422 7.557 7.017 12.71 7.017 5.152 0 9.025-3.595 12.709-7.017l.075-.07c3.781-3.51 7.379-6.819 12.103-6.819 2.372 0 5.089.836 7.859 2.127 2.763 1.287 5.538 3.008 8.016 4.736a91.034 91.034 0 018.506 6.757l.125.115.032.029.009.008.341-.365.34-.367-.003-.003-.009-.008-.033-.03-.13-.119a86.036 86.036 0 00-2.339-2.03 92.022 92.022 0 00-6.267-4.807c-2.505-1.747-5.332-3.503-8.165-4.823-2.826-1.317-5.698-2.22-8.282-2.22-5.152 0-9.025 3.596-12.709 7.018l-.075.07c-3.781 3.51-7.379 6.819-12.103 6.819-4.725 0-8.323-3.309-12.104-6.82l-.074-.069c-3.685-3.422-7.557-7.018-12.71-7.018-5.152 0-9.025 3.596-12.71 7.018l-.074.07c-3.78 3.51-7.379 6.819-12.103 6.819s-8.323-3.309-12.104-6.82l-.074-.069c-3.685-3.422-7.557-7.018-12.71-7.018-2.583 0-5.455.903-8.28 2.22-2.834 1.32-5.661 3.076-8.166 4.823a91.994 91.994 0 00-8.607 6.837l-.13.118-.032.031-.01.008-.001.002s-.001.001.339.367zM.68 64.835l-.34-.366-.34-.367.003-.003.009-.008.033-.03a35.69 35.69 0 01.626-.564 91.994 91.994 0 018.11-6.391c2.505-1.748 5.332-3.504 8.165-4.824 2.826-1.316 5.698-2.22 8.281-2.22 5.153 0 9.025 3.597 12.71 7.018l.074.07c3.781 3.51 7.38 6.819 12.104 6.819 4.724 0 8.322-3.309 12.103-6.82l.075-.069c3.684-3.421 7.557-7.017 12.71-7.017 5.152 0 9.024 3.596 12.709 7.017l.074.07c3.781 3.51 7.38 6.819 12.104 6.819 4.724 0 8.322-3.309 12.103-6.82l.075-.069c3.684-3.421 7.557-7.017 12.709-7.017 2.584 0 5.456.903 8.282 2.22 2.833 1.32 5.66 3.075 8.165 4.823a92.022 92.022 0 018.606 6.837l.13.118.033.03.011.01s.001.001-.339.368l-.341.366-.002-.002-.007-.007-.032-.029-.02-.019-.041-.037-.064-.058c-.111-.1-.275-.249-.488-.438a91.001 91.001 0 00-8.018-6.32c-2.478-1.728-5.253-3.449-8.016-4.736-2.77-1.291-5.487-2.126-7.859-2.126-4.724 0-8.322 3.308-12.103 6.82l-.075.068c-3.684 3.422-7.557 7.018-12.71 7.018-5.152 0-9.024-3.596-12.709-7.018l-.074-.069c-3.781-3.51-7.38-6.82-12.104-6.82-4.724 0-8.322 3.31-12.103 6.82l-.075.07c-3.684 3.42-7.556 7.017-12.71 7.017-5.152 0-9.024-3.596-12.709-7.018l-.074-.069c-3.781-3.51-7.38-6.82-12.104-6.82-2.372 0-5.089.836-7.858 2.127-2.763 1.287-5.538 3.008-8.016 4.737a90.982 90.982 0 00-8.506 6.757l-.126.114-.03.029-.01.01zM.34 89.5l.34.366.01-.01.031-.028.126-.115a83.991 83.991 0 012.309-2.003 91.014 91.014 0 016.197-4.754c2.478-1.728 5.253-3.45 8.016-4.737 2.77-1.29 5.486-2.126 7.858-2.126 4.725 0 8.323 3.309 12.104 6.82l.074.069c3.685 3.421 7.557 7.017 12.71 7.017 5.152 0 9.025-3.596 12.71-7.017l.074-.07c3.78-3.51 7.379-6.819 12.103-6.819 4.725 0 8.323 3.309 12.104 6.82l.074.069c3.685 3.421 7.557 7.017 12.71 7.017 5.152 0 9.025-3.596 12.709-7.017l.075-.07c3.781-3.51 7.379-6.819 12.103-6.819 2.372 0 5.089.836 7.859 2.126 2.763 1.288 5.538 3.009 8.016 4.737a91.034 91.034 0 018.506 6.757l.125.115.032.029.007.007.002.001.341-.366.34-.366-.003-.003-.009-.008-.033-.03-.13-.119a86.036 86.036 0 00-2.339-2.03 92.022 92.022 0 00-6.267-4.807c-2.505-1.748-5.332-3.503-8.165-4.823-2.826-1.317-5.698-2.22-8.282-2.22-5.152 0-9.025 3.596-12.709 7.018l-.075.069C108.212 85.69 104.614 89 99.89 89c-4.725 0-8.323-3.31-12.104-6.82l-.074-.07c-3.685-3.42-7.557-7.017-12.71-7.017-5.152 0-9.025 3.596-12.71 7.018l-.074.069C58.438 85.69 54.84 89 50.115 89s-8.323-3.31-12.104-6.82l-.074-.07c-3.685-3.42-7.557-7.017-12.71-7.017-2.583 0-5.455.903-8.28 2.22-2.834 1.32-5.661 3.075-8.166 4.823a91.994 91.994 0 00-8.607 6.837l-.13.118-.032.031-.01.008-.001.002S0 89.133.34 89.5z" />
            </g>
          </svg>
        </section>
      );
    }}
  />
);

export default TeamSection;