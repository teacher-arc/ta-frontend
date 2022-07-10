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
        backgroundImage={footerBackgroundImage}
        width="100%"
        height="auto"
        backgroundSize="cover"
      >
        <Box mx="200px" py="100px">
          <SimpleGrid columns={4}>
            <Box my="20px">
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
            <Box my="20px">
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
            <Box my="20px">
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
            <Box my="20px">
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
          </SimpleGrid>

          <Text
            fontSize="3xl"
            fontWeight="extrabold"
            margin="10px"
            color="#FFC905"
            marginBottom="30px"
          >
            All Rights Reserved.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
