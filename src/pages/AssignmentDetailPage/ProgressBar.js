import React from "react";
import { status as statuses, status_number } from "./status";
import { Box, Heading, Text, Center, Image } from "@chakra-ui/react";

function StatusIcon({ img, title, opacity_flag = false }) {
  return (
    <Box
      margin="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      opacity={opacity_flag ? 0.3 : 1}
      height="20%"
      width="20%"
    >
      <Image height="4rem" width="4rem" src={img} padding="0.5rem" />
      <Text fontSize="0.7rem" fontWeight="black">
        {title}
      </Text>
    </Box>
  );
}
function ProgressBar() {
  const current_status_number = 2;
  return (
    <Box
      position="absolute"
      borderRadius="24px"
      margin="5%"
      alignItems="right"
      height="30%"
      width="90%"
      backgroundColor="#FFFFFF"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        padding="10px"
      >
        {/* <Box
        width="30%"
        position="relative"
        marginTop="5%"
        padding="0 10px 0 5px"
      >
        <Text fontSize="0.8rem">
          <b>Subject: </b> {subject}
        </Text>
        <Text fontSize="0.8rem">
          <b>Title: </b> {title}
        </Text>
        <Text fontSize="0.8rem">
          <b>Id: </b> {id}
        </Text>
      </Box> */}
        {statuses.map((status, index) => (
          <StatusIcon
            img={status.img}
            title={status.title}
            opacity_flag={index == current_status_number ? false : true}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProgressBar;
