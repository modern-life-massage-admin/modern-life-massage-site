import * as React from "react";
import { Link } from "gatsby";

import PageLayout from "../components/PageLayout";
import Button from "../components/Button";

const NotFoundPage = () => (
  <PageLayout layout="no-pad">
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
