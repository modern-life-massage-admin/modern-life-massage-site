import * as React from "react";

import Button from "../Button";

const ContactForm = () => (
  <section className="contact-wrapper">
    <div className="contact-form">
      <h2>Contact Us</h2>
      <div className="form__wrapper">
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="input-group">
            <input className="text-input" type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input className="text-input" type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea className="textarea-input" name="message" />
            <label>Message</label>
          </div>
          <div>
            <Button onClick={() => {}} variant="primary" size="large" submit>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;
