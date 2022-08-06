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
function ProblemCard({ image, title, detail, id }) {
  return (
    <div>
      <Box
        minWidth={{ sm: "235px", lg: "335px" }}
        height={{ lg: "405px" }}
        bg="linear-gradient(98.9deg, #96DAEE -55.91%, rgba(255, 255, 255, 0) 151.85%)"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        paddingBottom="0"
        display="flex"
        flexDirection={"column"}
        margin={{ lg: "10px" }}
        id={id}
      >
        <Box
          borderTopRadius="24px"
          width="335px"
          height="205px"
          bgColor="#FFFFFF"
          paddingTop="40px"
        >
          <Center>
            <img src={image} height="180px" width="180px" />
          </Center>
        </Box>
        <Box
          borderBottomRadius="24px"
          width="335px"
          height="200px"
          bgColor="#D4E0F2"
          paddingLeft="3px"
        >
          <Text fontSize="xl" fontWeight="bold" margin="10px">
            {title}
          </Text>
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
            fontSize={{ sm: "18px", lg: "4xl" }}
            fontWeight="1000"
            marginTop="40px"
            color="blackAlpha.900"
          >
            The only place for assignment doubt clearance
          </Text>
        </Center>
        <Center>
          <Text
            fontSize={{ sm: "md", lg: "xl" }}
            fontWeight="1000"
            marginTop="10px"
            marginBottom="40px"
            color="blackAlpha.500"
          >
            Recieve guidance for all sorts of assignments
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={10}>
            {problems.map((problem) => (
              <ProblemCard
                image={problem.image}
                title={problem.title}
                detail={problem.detail}
                id={problem.id}
              />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </div>
  );
}

export default ThirdPanel;
