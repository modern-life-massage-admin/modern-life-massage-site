import * as React from "react";

import PageLayout from "../components/PageLayout";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import HoursSection from "../components/HoursSection";

const AboutPage = () => (
  <PageLayout layout="no-pad">
    <AboutSection />
    <TeamSection />
    <HoursSection />
  </PageLayout>
);

export default AboutPage;
