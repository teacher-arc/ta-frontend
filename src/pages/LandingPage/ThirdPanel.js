import React from "react";
import { problems } from "./problem";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import prob1 from "./../../Assets/prob1.png";
function ProblemCard({ image, title, detail }) {
  return (
    <div>
      <Box
        width="335px"
        height="405px"
        bg="linear-gradient(98.9deg, #96DAEE -55.91%, rgba(255, 255, 255, 0) 151.85%)"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        paddingBottom="0"
        display="flex"
        flexDirection="column"
        margin="10px"
      >
        <Box
          borderTopRadius="24px"
          width="335px"
          height="205px"
          bgColor="#FFFFFF"
          paddingTop="60px"
        >
          <Center>
            <img src={image} height="120px" width="120px" />
          </Center>
        </Box>
        <Box
          borderBottomRadius="24px"
          width="335px"
          height="200px"
          bgColor="#D4E0F2"
        >
          <Center>
            <Text fontSize="xl" fontWeight="bold" margin="10px">
              {title}
            </Text>
          </Center>
          <Center>
            <Text
              fontSize="md"
              margin="10px"
              as="p"
              lineHeight="1.6rem"
              paddingLeft="4px"
            >
              {detail}
            </Text>
          </Center>
        </Box>
      </Box>
    </div>
  );
}
function ThirdPanel() {
  return (
    <div>
      <Box marginBottom="40px">
        <Center>
          <Text
            fontSize="4xl"
            fontWeight="1000"
            marginTop="40px"
            color="blackAlpha.900"
          >
            One stop solution to all your homework problems
          </Text>
        </Center>
        <Center>
          <Text
            fontSize="xl"
            fontWeight="1000"
            marginTop="10px"
            marginBottom="40px"
            color="blackAlpha.500"
          >
            One stop solution to all your homework problems
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={3} spacing={10}>
            {problems.map((problem) => (
              <ProblemCard
                image={problem.image}
                title={problem.title}
                detail={problem.detail}
              />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </div>
  );
}

export default ThirdPanel;
