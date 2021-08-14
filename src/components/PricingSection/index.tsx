import * as React from "react";

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
      {prices.map((price) => (
        <div className="pricing-section__price">
          <span>{price.time}</span>
          <div>
            <h3>{price.price}</h3>
          </div>
        </div>
      ))}
    </div>
    <div className="pricing-section__footnotes">
      <p>* Monthly package includes four 60 minute massages per month</p>
      <p>We will travel to your location for an additional $40</p>
      <p>
        15 minute sessions are only offered for Chair Massages, unless prior
        arrangements are made
      </p>
    </div>
  </section>
);

export default PricingSection;
