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
        width="443px"
        height="205px"
        bg="#FFFFFF"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="50px"
        padding="24px"
        borderLeft="11px solid #5486DB"
        paddingBottom="0"
        display="flex"
        flexDirection="column"
        margin="10px"
        marginBottom="40px"
      >
        <Text fontSize="2xl" fontWeight="extrabold" margin="10px">
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
    </div>
  );
}
function ForthPanel() {
  return (
    <div>
      <Box backgroundColor="#D4E0F2" paddingBottom="40px" marginBottom="40px">
        <Center>
          <Text
            fontSize="4xl"
            fontWeight="1000"
            marginTop="40px"
            color="blackAlpha.900"
          >
            multiple benefits of teacherArc homework help
          </Text>
        </Center>
        <Center>
          <Text
            fontSize="xl"
            fontWeight="1000"
            marginTop="10px"
            marginBottom="40px"
            color="blackAlpha.800"
          >
            One stop solution to all your homework problems
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={2} spacing={20}>
            {benefits.map((benefit) => (
              <BenefitCard title={benefit.title} detail={benefit.detail} />
            ))}
          </SimpleGrid>
        </Center>
        <Center>
          <Button variant="landingpage">Get Help</Button>
        </Center>
      </Box>
    </div>
  );
}

export default ForthPanel;
