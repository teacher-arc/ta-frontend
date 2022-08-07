import React from "react";
import RectangleIllustration from "../../widgets/RectangleIllustration";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
function ProgressBar() {
  return (
    <Box
      position="absolute"
      borderRadius="24px"
      margin="5%"
      alignItems="right"
      height="30%"
      width="90%"
      backgroundColor="#FFFFFF"
    ></Box>
  );
}
function AssignmentDetailsPage() {
  return (
    <div>
      <Box pos="relative" width="100%" display="flex" zIndex="0">
        <RectangleIllustration />
      </Box>

      <Heading as="h4" margin="0 auto" width="60%" paddingBottom="20px">
        Transaction Details
      </Heading>

      <Box
        position="relative"
        borderRadius="24px"
        margin="0 auto"
        alignItems="right"
        height="70vh"
        width="60%"
        backgroundColor="#6B96E1"
        zindex="5"
      >
        <ProgressBar />
      </Box>
    </div>
  );
}

export default AssignmentDetailsPage;
