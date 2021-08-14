import * as React from "react";

import LandingHero from "../components/LandingHero";
import PageLayout from "../components/PageLayout";
import AddOnSection from "../components/AddOnSection";
import ValuePropSection from "../components/ValuePropSection";
import Reviews from "../components/Reviews";

const IndexPage = () => (
  <PageLayout layout="no-pad">
    <LandingHero />
    <AddOnSection />
    <ValuePropSection />
    <Reviews />
  </PageLayout>
);

export default IndexPage;
