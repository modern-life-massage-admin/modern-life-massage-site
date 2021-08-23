import * as React from "react";

import ServicesPageData from "../../../content/servicespage.json";

const ServicesSection = () => {
  const { services } = ServicesPageData;
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-section__cards">
        {services.map(({ title, description, image }) => (
          <div className="services-section__card">
            <img src={image} alt="service cover image" />
            <div className="services-section__card-content">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
      <svg
        width="229"
        height="153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.968 153h7.052L0 118.249v12.24L12.968 153zM0 97.364L32.051 153h7.052L0 85.124v12.24zM0 64.239L51.135 153h7.051L0 51.999v12.24zM0 31.113L70.218 153h7.051L0 18.873v12.24zM1.16 0L89.3 153h7.052L8.21 0H1.159zM20.243 0l88.142 153h7.051L27.294 0h-7.051zM39.326 0l88.142 153h7.052L46.377 0h-7.051zM58.41 0l88.142 153h7.051L65.461 0h-7.052zM77.493 0l88.142 153h7.051L84.544 0h-7.051zM96.576 0l88.142 153h7.052L103.627 0h-7.051zM115.659 0l88.142 153h7.052L122.711 0h-7.052zM134.743 0l88.142 153H229v-1.625L141.794 0h-7.051zM153.826 0L229 130.489v-12.24L160.877 0h-7.051zM172.909 0L229 97.364v-12.24L179.961 0h-7.052zM191.993 0L229 64.239v-12.24L199.044 0h-7.051zM211.076 0L229 31.113v-12.24L218.127 0h-7.051z"
          fill="#000"
          fill-opacity=".5"
        />
      </svg>
    </section>
  );
};

export default ServicesSection;
