import * as React from "react";

import PageLayout from "../components/PageLayout";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

const ContactPage = () => (
  <PageLayout layout="no-pad">
    <SEO
      title="Contact"
      description="Contact Modern Life Massage Therapy"
      slug="/services"
    />
    <ContactForm />
  </PageLayout>
);

export default ContactPage;
