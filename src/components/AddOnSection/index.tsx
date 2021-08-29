import * as React from "react";

import HomePageData from "../../../content/homepage.json";

const AddOnSection = () => (
  <section className="add-ons">
    <div className="add-ons__main">
      <span className="eyebrow">Enhancements &#38; Add-ons</span>
      <h4>No Hidden Fees</h4>
      <p>
        We don't expect you to know when hot stones might enhance the treatment,
        or when cupping may be appropriate to add to a session. Those are things
        that our therapists have been trained to understand. And they will help
        you, without any hidden up-charges or fees.
      </p>
    </div>
    <ul>
      {HomePageData.add_ons.map(({ description, title }, index) => {
        if (index > 2) return;
        return (
          <li>
            <svg
              width="20"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6.5L7.5 12 18 1.5" stroke="#6BF59A" strokeWidth="3" />
            </svg>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
    <ul>
      {HomePageData.add_ons.map(({ description, title }, index) => {
        if (index < 3 || index > 5) return;
        return (
          <li>
            <svg
              width="20"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6.5L7.5 12 18 1.5" stroke="#6BF59A" strokeWidth="3" />
            </svg>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  </section>
);

export default AddOnSection;
