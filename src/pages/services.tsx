import * as React from "react";

import PageLayout from "../components/PageLayout";
import PricingSection from "../components/PricingSection";
import ServicesSection from "../components/ServicesSection";
import SEO from "../components/SEO";

const ServicesPage = () => (
  <PageLayout layout="no-pad">
    <SEO
      title="Services"
      description="Modern Life Massage Therapy's services and prices"
      slug="/services"
    />
    <PricingSection />
    <ServicesSection />
  </PageLayout>
);

export default ServicesPage;
