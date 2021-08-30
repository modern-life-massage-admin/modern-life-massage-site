import { forEach } from "lodash";
import React, { useState } from "react";

import BookNowPageData from "../../../content/booknowpage.json";
import Button from "../Button";

const PromoCodeSection = () => {
  const { promoCodes } = BookNowPageData;
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const onSubmitPromoCode = () => {
    const exisitingCodes = promoCodes.map(({ code }) => code);
    if (exisitingCodes.includes(promoCode)) {
      setFeedbackMessage("We are taking you to your offer page.");
      promoCodes.forEach(({ code, url }) => {
        if (code == promoCode) {
          window.location.replace(url);
        }
      });
    } else {
      setFeedbackMessage("Sorry, that is not a valid code.");
    }
  };
  if (promoCodes.length > 0) {
    return (
      <div className="promo-code">
        <h2>Have a Promo Code?</h2>
        <p>Enter your promo code here to access your special offer.</p>
        <div className="promo-code__inputs">
          <input
            className="text-input"
            type="text"
            name="promo code"
            placeholder="Promo Code"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value);
            }}
          />
          <Button
            variant="primary"
            onClick={() => {
              onSubmitPromoCode();
            }}
          >
            Use Promo Code
          </Button>
        </div>
        <div className="promo-code__feedback">
          {!!feedbackMessage && <p>{feedbackMessage}</p>}
        </div>
      </div>
    );
  }
};

export default PromoCodeSection;
