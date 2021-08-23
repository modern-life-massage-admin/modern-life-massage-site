import * as React from "react";

import AboutPageData from "../../../content/aboutpage.json";

const HoursSection = () => {
  const { hours } = AboutPageData;
  return (
    <section className="hours-section">
      <div className="hours-section__content">
        <div className="hours-section__hours">
          <h3>Hours</h3>
          <span>By appointment only</span>
          <ul>
            {hours.map(({ day, hours }) => (
              <li>
                <p>{day}</p>
                <p>{hours}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="hours-section__address">
          <h3>Address</h3>
          <p>
            1716 Sharkey Way
            <br />
            Suite 200
            <br />
            Lexington, KY 40511-2096
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.114727273424!2d-84.53042838467388!3d38.06770917970724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424383f0f00001%3A0x869b174393c13b24!2s1716%20Sharkey%20Way%20Suite%20200%2C%20Lexington%2C%20KY%2040511!5e0!3m2!1sen!2sus!4v1628224904589!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            title="store map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
