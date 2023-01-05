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

function FifthPanel() {
  const { t } = useTranslation();

  return (
    <div>
      <Box mx={{ sm: "20px", lg: "200px" }} marginBottom="60px">
        <Text
          fontSize="3xl"
          fontWeight="extrabold"
          margin="10px"
          color="black"
          marginBottom="30px"
        >
          {t("How can mentorship help you achieve your goals?")}
        </Text>
        <Text
          fontSize="md"
          margin="10px"
          as="p"
          lineHeight="1.6rem"
          paddingLeft="4px"
          marginBottom="60px"
        >
          {t(
            "When you've got a mentor, you learning journey becomes easier. Now the easy part isn't that the work load reduces. The mentor is not there to do your job. The mentor is there so that you can be unblocked on whatever's blocking you fast and get your game going. The mentor's duty is to prevent you from making all the common mistakes others make, which leads to inefficient use of time. A mentor helps you to make use the full efficiency of your time, so that you can bring out the best of you and fast."
          )}
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="extrabold"
          margin="10px"
          color="black"
          marginBottom="30px"
        >
          {t("TeacherArc - The go to platform for active mentorship  ")}
        </Text>
        <Text
          fontSize="md"
          margin="10px"
          as="p"
          lineHeight="1.6rem"
          paddingLeft="4px"
          marginBottom="60px"
        >
          {t(
            "TeacherArc has a goal to help you reach greater heights by providing you the mentor everyone dreams of. Get a chance to collaborate with one of our mentors for guiding through your assignment and study like never before!"
          )}
        </Text>
        <Center>
          <Button variant="landingpage">{t("Read More")}</Button>
        </Center>
      </Box>
    </div>
  );
}

export default FifthPanel;
