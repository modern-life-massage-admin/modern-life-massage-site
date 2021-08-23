import * as React from "react";

import ServicesPageData from "../../../content/servicespage.json";

const prices = [
  {
    time: "15 Minutes",
    price: "$20",
  },
  {
    time: "30 Minutes",
    price: "$45",
  },
  {
    time: "60 Minutes",
    price: "$80",
  },
  {
    time: "90 Minutes",
    price: "$120",
  },
  {
    time: "120 Minutes",
    price: "$160",
  },
  {
    time: "Monthly Package *",
    price: "$256",
  },
];
const PricingSection = () => (
  <section className="pricing-section">
    <span className="eyebrow">General Pricing</span>
    <div className="pricing-section__pricing-table">
      {ServicesPageData.prices.map(({ label, price }) => (
        <div className="pricing-section__price">
          <span>{label}</span>
          <div>
            <h3>{`$${price}`}</h3>
          </div>
        </div>
      ))}
    </div>
    <div className="pricing-section__footnotes">
      {/* {ServicesPageData.pricing-notes.map} */}
    </div>
  </section>
);

export default PricingSection;
