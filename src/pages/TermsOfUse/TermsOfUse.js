import React from "react";

const TermsOfUse = () => {
  return (
    <div className="parentDiv">
      <div className="TermsOfUse">
        <div>
          <h1>Terms of Use</h1>
          The 78th Army Band Web Site is maintained by 78th Army Band's Public
          Affairs team. It is intended to be used by the public for viewing and
          retrieving information only. Unauthorized attempts to upload or change
          information on this service are strictly prohibited and may be
          punishable under the Computer Fraud and Abuse act of 1986. All
          information on this site is considered public information and may be
          distributed or copied freely except where otherwise noted.
        </div>
      </div>
      <div className="TermsOfUse">
        <div>
          <h2>Disclaimer</h2>
          <p>
            The appearance of external hyperlinks on the 78th Army Band web site
            does not constitute endorsement by the U.S Army for the information,
            products or services contained therein.{" "}
          </p>
          <p>
            For other than authorized activities such as military exchanges and
            Morale, Welfare and Recreation sites, the U.S. Army does not
            exercise any editorial control over the information you find at
            these locations.{" "}
          </p>
          <p>
            Such links are provided consistent with the stated purpose of this
            site.{" "}
          </p>
          <p>
            Access to 78th Army Band’s Facebook and Twitter pages may require
            external site memberships that are not managed or maintained by the
            78th Army Band or The U.S. Army.{" "}
          </p>
          View The U.S. Army’s{" "}
          <a
            href="https://www.army.mil/terms/"
            id="TermsPageEmbeddedLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to US Army website"
          >
            Use of Copyrighted Material
          </a>{" "}
          policy.
        </div>
      </div>
      <div className="TermsOfUse">
        <div>
          <h2>Security Notice</h2>
          <ul>
            1. The 78th Army Band website is provided as a public service by the
            78th Army Band's Public Affairs team.
          </ul>
          <ul>
            2. Information presented on this website is considered public
            information and may be distributed or copied. Use of appropriate
            byline/photo/image credits is requested.
          </ul>
          <ul>
            3. Unauthorized attempts to upload information or change information
            on this service are strictly prohibited and may be punishable under
            the{" "}
            <a
              href="https://www.justice.gov/sites/default/files/criminal-ccips/legacy/2015/01/14/ccmanual.pdf"
              id="TermsPageEmbeddedLink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Computer Fraud and Abuse Act of 1986 manual"
            >
              Computer Fraud and Abuse Act of 1986
            </a>{" "}
            and the National Information Infrastructure Protection Act of 1996.
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;