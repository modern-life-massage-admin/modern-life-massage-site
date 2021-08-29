import * as React from "react";
import { Link } from "gatsby";

import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <PageLayout layout="no-pad">
    <SEO
      title="Thank You"
      description="Your message has been sent to Modern Life Massage Therapy."
      slug="/thank-you"
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "9.6rem 0 11.2rem",
      }}
    >
      <h1 style={{ marginBottom: "3.2rem", fontSize: "4.8rem" }}>
        Your Message has been Sent!
      </h1>
      <p style={{ fontSize: "2.4rem", marginBottom: "4.8rem" }}>
        Thanks for contacting us! We'll be in touch soon.
      </p>
      <button className="button--primary--large">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  </PageLayout>
);

export default NotFoundPage;
