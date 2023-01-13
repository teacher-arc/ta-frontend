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
import "./../index.css";
function StepCard({ title, description, count }) {
  const { t } = useTranslation();
  const Card = count === 4 ? LastCard : count === 1 ? FirstCard : MiddleCard;

  return (
    <Card>
      <div className="stepcard_circle">{count}</div>
      <Text
        fontSize={{ sm: "sm", lg: "3xl" }}
        fontWeight="900"
        margin={{ sm: "4px", lg: "40px 20px 0 20px" }}
      >
        {t(title)}
      </Text>

      <Text
        fontSize={{ sm: "sm", lg: "md" }}
        fontWeight="extrabold"
        margin="10px"
        as="p"
        lineHeight={{ sm: "1rem", lg: "1.6rem" }}
        paddingLeft="4px"
      >
        {t(description)}
      </Text>
    </Card>
  );
}

const FirstCard = ({ children }) => (
  <Box
    backgroundColor="#FFFFFF"
    paddingTop="40px"
    marginTop="80px"
    width="20vw"
    height="50vh"
    style={{
      "box-shadow": "-23.4629px 16.2435px 48.129px rgba(0, 0, 0, 0.25)",
      "border-radius": "0px 0px 0px 50px",
    }}
  >
    {children}
  </Box>
);

const LastCard = ({ children }) => (
  <Box
    backgroundColor="#FFFFFF"
    paddingTop="40px"
    marginTop="80px"
    width="20vw"
    height="50vh"
    style={{
      "box-shadow": "-23.4629px 16.2435px 48.129px rgba(0, 0, 0, 0.25)",
      "border-radius": "0px 50px 0px 0px",
    }}
  >
    {children}
  </Box>
);

const MiddleCard = ({ children }) => (
  <Box
    backgroundColor="#FFFFFF"
    paddingTop="40px"
    marginTop="80px"
    width="20vw"
    height="50vh"
    style={{
      "box-shadow": "-23.4629px 16.2435px 48.129px rgba(0, 0, 0, 0.25)",
    }}
  >
    {children}
  </Box>
);
export default StepCard;
