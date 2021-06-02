import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class TermsOfUse extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Terms of Use</h1>
        <p>
          The 78th Army Band Web Site is maintained by 78th Army Band's Public
          Affairs team. It is intended to be used by the public for viewing and
          retrieving information only. Unauthorized attempts to upload or change
          information on this service are strictly prohibited and may be
          punishable under the Computer Fraud and Abuse act of 1986. All
          information on this site is considered public information and may be
          distributed or copied freely except where otherwise noted.
        </p>
        <Footer />
      </div>
    );
  }
}

export default TermsOfUse;
