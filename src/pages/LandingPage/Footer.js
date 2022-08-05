import React from "react";
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
import footerBackgroundImage from "./../../Assets/FooterBackgroundImage.png";

function Footer() {
  return (
    <div>
      <Box
        backgroundImage={{ lg: footerBackgroundImage }}
        backgroundColor="#6995E0"
        width="100%"
        height="auto"
        backgroundSize="fit"
      >
        <Box mx={{ sm: "20px", lg: "200px" }} py={{ sm: "20px", lg: "100px" }}>
          <SimpleGrid columns={3}>
            <Box my={{ sm: "5px", lg: "20px" }}>
              <Text
                color="#FFC905"
                lineHeight="3rem"
                fontSize="lg"
                fontWeight="bold"
              >
                Services
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
            </Box>
            <Box my={{ sm: "5px", lg: "20px" }}>
              <Text
                color="#FFC905"
                lineHeight="3rem"
                fontSize="lg"
                fontWeight="bold"
              >
                Features
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
              <Text lineHeight="3rem" color="#ffffff">
                Sevice 1
              </Text>
            </Box>
            <Box my={{ sm: "5px", lg: "20px" }}>
              <Text
                color="#FFC905"
                lineHeight="3rem"
                fontSize="lg"
                fontWeight="bold"
              >
                About
              </Text>
            </Box>
          </SimpleGrid>

          <Text
            fontSize="3xl"
            fontWeight="extrabold"
            margin="10px"
            color="#FFC905"
            marginBottom="30px"
          >
            ©All Rights Reserved.
          </Text>
          <Text
            fontSize="md"
            margin="10px"
            as="p"
            lineHeight="1.6rem"
            paddingLeft="4px"
            marginBottom="60px"
            color="#FFFFFF"
          >
            TeacherArc reserves all rights to the services they provide and the
            content they share, which is not intended to be used commercially,
            but only for the sole purpose of learning.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
