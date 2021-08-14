import * as React from "react";

import PageLayout from "../components/PageLayout";
import PricingSection from "../components/PricingSection";
import ServicesSection from "../components/ServicesSection";

const ServicesPage = () => (
  <PageLayout layout="no-pad">
    <PricingSection />
    <ServicesSection />
  </PageLayout>
);

export default ServicesPage;
