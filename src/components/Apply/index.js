/*eslint-disable */
import React from "react";
import Ed from "../Video";

export default function Apply() {
  return (
    <div id="apply">
      <Ed />
      <div className="apply-right-container">
        <h1 className="apply-title">Apply</h1>
        <p className="apply-para">
          Resumes must be uploaded with a completed application in order to be
          considered.
        </p>
        <div className="apply-btn-container">
          <a
            className="apply-btn"
            href="https://portal.cbc.global/default.aspx?page=5111"
            aria-label="Application Form"
          >
            APPLICATION FORM
          </a>
          <a
            className="apply-btn"
            href="https://communitybible.formstack.com/forms/cbc_ministry_institute_resumes"
            aria-label="Resume Upload"
          >
            RESUME UPLOAD
          </a>
        </div>
      </div>
    </div>
  );
}
