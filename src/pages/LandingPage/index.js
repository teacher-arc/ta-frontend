import React from "react";
import Auth from "../LoginSignUpPages";
import firstPanel from "./../../Assets/FirstPanel.png";
import secondPanel from "./../../Assets/SecondPanel.png";
import ThirdPanel from "./ThirdPanel";
import ForthPanel from "./ForthPanel";
import FifthPanel from "./FifthPanel";
import Footer from "./Footer";
function LandingPage() {
  return (
    <div>
      <div>
        <img src={firstPanel} alt="firstPanel" height="80vh" width="100%" />
      </div>
      <div>
        <img src={secondPanel} alt="firstPanel" height="80vh" width="100%" />
      </div>
      <ThirdPanel />
      <ForthPanel />
      <FifthPanel />
      <Footer />
    </div>
  );
}

export default LandingPage;
