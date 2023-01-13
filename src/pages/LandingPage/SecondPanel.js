import React from "react";
import { useTranslation } from "react-i18next";
import { steps } from "./Steps";
import StepCard from "../../components/StepCard";
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
function SecondPanel() {
  const { t } = useTranslation();

  return (
    <div>
      <Box
        backgroundColor="#D4E0F2"
        paddingBottom="40px"
        marginBottom="40px"
        marginTop="40px"
        width="100%"
        height="110vh"
        className="second-panel"
      >
        <Center>
          <Text
            fontSize={{ sm: "xl", lg: "5xl" }}
            fontWeight="1000"
            marginTop="40px"
            color="blackAlpha.900"
            padding="0 10px 0 10px"
          >
            {t("Get Assignment Aid in Easy Steps")}
          </Text>
        </Center>
        <Center>
          <Text
            fontSize={{ sm: "md", lg: "xl" }}
            fontWeight="1000"
            marginTop="10px"
            marginBottom="40px"
            color="blackAlpha.800"
            padding="0 6px 0 6px"
            textAlign={"center"}
          >
            {t("Simplicity at its Best!")}
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={{ sm: 1, lg: 4 }} spacing={{ sm: 3, lg: 0 }}>
            {steps.map(({ title, description }, index) => (
              <StepCard
                title={title}
                description={description}
                count={index + 1}
              />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </div>
  );
}

export default SecondPanel;
