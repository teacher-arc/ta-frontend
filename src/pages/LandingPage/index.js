import React from "react";
import Auth from "../LoginSignUpPages";
import firstPanel from "./../../Assets/FirstPanel.png";
import secondPanel from "./../../Assets/SecondPanel.png";
import ThirdPanel from "./ThirdPanel";
import ForthPanel from "./ForthPanel";
import FifthPanel from "./FifthPanel";
//can be refactored to firstpanel
import { Text } from "@chakra-ui/react";
import Footer from "./Footer";
import "./index.css";
function LandingPage() {
  return (
    <div>
      <div>
        <img src={firstPanel} alt="firstPanel" className="firstPanel-image" />
        <Text
          fontSize={{ sm: "14px", lg: "48px" }}
          color="#003286"
          fontWeight={{ sm: "extrabold", lg: "extrabold" }}
          marginLeft={{ sm: "20px", lg: "70px" }}
          position="absolute"
          top={{ sm: "2%", lg: "5%" }}
          width={{ sm: "35%", lg: "30%" }}
        >
          Get All The Mentorship You’ll Ever Need
          <Text as="span" color="#FFFFFF">
            {" "}
            24x7
          </Text>
          <Text fontSize={{ lg: "18px" }}> Mentorship at its best</Text>
        </Text>
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
