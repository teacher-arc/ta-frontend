import React from "react";
import { problems } from "./problem";
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
import { benefits } from "./benefits";
function BenefitCard({ title, detail }) {
  return (
    <div>
      <Box
        w={{ sm: "80%", lg: "443px" }}
        h={{ sm: "100px", lg: "175px" }}
        bg="#FFFFFF"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="50px"
        padding={{ sm: "5px", lg: "24px" }}
        borderLeft="11px solid #5486DB"
        paddingBottom="0"
        display="flex"
        flexDirection="column"
        margin={{ sm: "4px", lg: "10px" }}
        marginBottom="40px"
        justifyContent="center"
      >
        <Text
          fontSize={{ sm: "sm", lg: "2xl" }}
          fontWeight="extrabold"
          margin={{ sm: "4px", lg: "10px" }}
        >
          {title}
        </Text>

        <Text
          fontSize={{ sm: "sm", lg: "md" }}
          margin="10px"
          as="p"
          lineHeight={{ sm: "1rem", lg: "1.6rem" }}
          paddingLeft="4px"
        >
          {detail}
        </Text>
      </Box>
    </div>
  );
}
function ForthPanel() {
  return (
    <div>
      <Box
        backgroundColor="#D4E0F2"
        paddingBottom="40px"
        marginBottom="40px"
        width="100%"
      >
        <Center>
          <Text
            fontSize={{ sm: "xl", lg: "4xl" }}
            fontWeight="1000"
            marginTop="40px"
            color="blackAlpha.900"
            padding="0 10px 0 10px"
          >
            Benefits that come with teacherarc
          </Text>
        </Center>
        <Center>
          <Text
            fontSize={{ sm: "md", lg: "lg" }}
            fontWeight="1000"
            marginTop="10px"
            marginBottom="40px"
            color="blackAlpha.800"
            padding="0 6px 0 6px"
            textAlign={"center"}
          >
            TeacherArc has a goal to unblock students of all backgrounds so that
            they can fulfill their career goals
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={{ sm: 3, lg: 20 }}>
            {benefits.map((benefit) => (
              <BenefitCard title={benefit.title} detail={benefit.detail} />
            ))}
          </SimpleGrid>
        </Center>
        <Center>
          <Button marginTop="20px" variant="landingpage">
            Get Help
          </Button>
        </Center>
      </Box>
    </div>
  );
}

export default ForthPanel;
