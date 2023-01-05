import React from "react";
import { useTranslation } from "react-i18next";
import Auth from "../LoginSignUpPages";
import firstPanel from "./../../Assets/FirstPanel.png";
import secondPanel from "./../../Assets/SecondPanel.png";
import ThirdPanel from "./ThirdPanel";
import ForthPanel from "./ForthPanel";
import FifthPanel from "./FifthPanel";
//can be refactored to firstpanel
import { Text, Image } from "@chakra-ui/react";
import Footer from "./Footer";
import "./index.css";
function LandingPage() {
  const { t } = useTranslation();

  return (
    <div>
      <figure>
        <Image
          src={firstPanel}
          alt="firstPanel"
          className="firstPanel-image"
          width={{ lg: "100%" }}
        />
        <figcaption>
          <Text
            fontSize={{ sm: "14px", lg: "48px" }}
            color="#003286"
            fontWeight={{ sm: "extrabold", lg: "extrabold" }}
            marginLeft={{ sm: "20px", lg: "70px" }}
            position="block"
            width={{ sm: "35%", lg: "30%" }}
          >
            {t("Get All The Mentorship You'll Ever Need")}
            <Text as="span" color="#FFFFFF">
              {" "}
              24x7
            </Text>
            <Text fontSize={{ lg: "18px" }}>{t("Mentorship at its best")}</Text>
          </Text>
        </figcaption>
      </figure>
      <div>
        <div className="second-panel"></div>
        //TODO : CONVERT INTO COMPONENT
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
