import * as React from "react";

import PageLayout from "../components/PageLayout";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import HoursSection from "../components/HoursSection";
import SEO from "../components/SEO";

const AboutPage = () => (
  <PageLayout layout="no-pad">
    <SEO
      title="About"
      description="About Modern Life Massage Therapy: our story, our staff, our hours and address"
      slug="/about"
    />
    <AboutSection />
    <TeamSection />
    <HoursSection />
  </PageLayout>
);

export default AboutPage;
