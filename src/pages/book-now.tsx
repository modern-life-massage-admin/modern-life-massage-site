import * as React from "react";

import PageLayout from "../components/PageLayout";
import PromoCodeSection from "../components/PromoCodeSection";
import SEO from "../components/SEO";

const AboutPage = () => (
  <PageLayout layout="no-pad">
    <SEO
      title="Book Now"
      description="Book your appointment for your next massage."
      slug="/book-now"
    />
    <PromoCodeSection />
    <iframe 
      src="https://www.massagebook.com/therapists/ModernLifeMassageTherapy/widget/services" 
      frameborder="0" 
      width="100%" 
      height="1000"
    ></iframe>
  </PageLayout>
);

export default AboutPage;
