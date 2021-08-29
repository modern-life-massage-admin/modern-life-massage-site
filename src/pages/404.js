import * as React from "react";
import { Link } from "gatsby";

import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <PageLayout layout="no-pad">
    <SEO title="404" description="Page Not Found" slug="/404" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "9.6rem 0 11.2rem",
      }}
    >
      <h1 style={{ marginBottom: "4.8rem", fontSize: "4.8rem" }}>
        Page not found...
      </h1>
      <button className="button--primary--large">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  </PageLayout>
);

export default NotFoundPage;
