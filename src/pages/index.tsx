import * as React from "react";

import LandingHero from "../components/LandingHero";
import PageLayout from "../components/PageLayout";
import AddOnSection from "../components/AddOnSection";
import ValuePropSection from "../components/ValuePropSection";
import Reviews from "../components/Reviews";
import SEO from "../components/SEO";

const IndexPage = () => (
  <PageLayout layout="no-pad">
    <SEO
      title="Home"
      description="Modern Life Massage Therapy, massage that is simply better | Home Page"
      slug="/"
    />
    <LandingHero />
    <AddOnSection />
    <ValuePropSection />
    <Reviews />
  </PageLayout>
);

export default IndexPage;
