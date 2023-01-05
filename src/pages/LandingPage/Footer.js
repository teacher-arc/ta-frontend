import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Container,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { problems } from "./problem";
import "./index.css";
import footerBackgroundImage from "./../../Assets/FooterBackgroundImage.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <Box
        backgroundColor="#6995E0"
        width="100%"
        height="auto"
        backgroundSize="fit"
      >
        <Box mx={{ sm: "20px", lg: "200px" }} py={{ sm: "20px", lg: "10px" }}>
          <Text
            color="#FFC905"
            lineHeight="1rem"
            fontSize="lg"
            fontWeight="bold"
            my="10px"
          >
            {t("Services")}
          </Text>
          <SimpleGrid
            columns={{ sm: 2, lg: 3 }}
            spacingX={{ sm: "40px", lg: "40px" }}
          >
            {problems.map((problem) => (
              <Text lineHeight="3rem" color="#ffffff">
                <a href={`#${problem.id}`} className="nostyle-anchor">
                  {t(problem.title)}
                </a>
              </Text>
            ))}
          </SimpleGrid>
          <Box my={{ sm: "5px", lg: "-5px" }}>
            <Text
              color="#FFC905"
              lineHeight="3rem"
              fontSize="lg"
              fontWeight="bold"
            >
              {t("About")}
            </Text>
          </Box>
          <Text
            fontSize={{ sm: "xl", lg: "3xl" }}
            fontWeight="extrabold"
            margin="10px 5px 10px -7px"
            color="#FFC905"
            marginBottom={{ sm: "20px", lg: "30px" }}
          >
            {t("© All Rights Reserved.")}
          </Text>
          <Text
            fontSize={{ sm: "sm", lg: "md" }}
            margin="10px"
            as="p"
            lineHeight="1.6rem"
            paddingLeft="4px"
            marginBottom="60px"
            color="#FFFFFF"
          >
            {t(
              "TeacherArc reserves all rights to the services they provide and the content they share, which is not intended to be used commercially, but only for the sole purpose of learning"
            )}
            .
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
