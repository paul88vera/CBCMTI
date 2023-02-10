import React, { useState } from "react";

export default function Faq() {
  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [openFaq3, setOpenFaq3] = useState(false);

  const openToggle1 = () => {
    setOpenFaq1((current) => !current);
  };
  const openToggle2 = () => {
    setOpenFaq2((current) => !current);
  };
  const openToggle3 = () => {
    setOpenFaq3((current) => !current);
  };

  return (
    <div id="faq">
      <h1>FAQ</h1>
      <div className="faq-container">
        <div className="faq-question" onClick={openToggle1}>
          <p className="faq-titles">How long is the program?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq1 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq1 && (
          <div className="faq-answer">
            <p className="faq-para">
              215 is a two-year commitment. The program starts in June and ends
              in May, 24 months later.
            </p>
          </div>
        )}
      </div>

      <div className="faq-container">
        <div className="faq-question" onClick={openToggle2}>
          <p className="faq-titles">How long is the program?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq2 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq2 && (
          <div className="faq-answer">
            <p className="faq-para">
              215 is a two-year commitment. The program starts in June and ends
              in May, 24 months later.
            </p>
          </div>
        )}
      </div>

      <div className="faq-container">
        <div className="faq-question" onClick={openToggle3}>
          <p className="faq-titles">How long is the program?</p>
          <img
            src="https://www.communitybible.com/wp-content/uploads/2023/02/chevron-right.png"
            alt="right"
            className={openFaq3 ? "chevron-open" : "chevron-collapsed"}
            width="30px"
          />
        </div>
        {openFaq3 && (
          <div className="faq-answer">
            <p className="faq-para">
              215 is a two-year commitment. The program starts in June and ends
              in May, 24 months later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
