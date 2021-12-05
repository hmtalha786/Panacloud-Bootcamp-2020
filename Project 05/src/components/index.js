import React from "react";
import { Breathe } from "./Breathe";
import { Navigation } from "./navigation";
import { Pollution } from "./pollution";
import { Restoration } from "./Restoration";
import { Footer } from "./footer";

const index = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="main_section">
        <Breathe />
      </div>
      <div className="third_section">
        <Pollution />
      </div>
      <div className="fourth_section">
        <Restoration />
      </div>
      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
};

export default index;
