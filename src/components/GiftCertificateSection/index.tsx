import * as React from "react";

import Button from "../Button";
import HomePageData from "../../../content/homepage.json";

const GiftCertificateSection = () => {
  const { gift_cert_link, gift_cert_paragraph, gift_cert_title } = HomePageData;
  return (
    <section className="gift-certificate">
      <h2>{gift_cert_title}</h2>
      {!!gift_cert_paragraph && <p>{gift_cert_paragraph}</p>}
      <Button
        onClick={() => {
          window.location.replace(gift_cert_link);
        }}
      >
        Purchase a Gift Certificate
      </Button>
    </section>
  );
};

export default GiftCertificateSection;
