import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";
import profilephoto from "./../Assets/profiledummyimage.png";

function AboutSection({ data }) {
  return (
    <div>
      <Box
        maxWidth="20%"
        minW="345px"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        zIndex={2}
        position="absolute"
        top="8rem"
        left="10%"
      >
        <Image
          src={profilephoto}
          size="md"
          borderTopRadius="24px"
          paddingBottom="10px"
        />
        <Box p={4}>
          <Heading as="h3" size="sm">
            About
          </Heading>
          <Text noOfLines={3}>{data.about}</Text>
          <Heading as="h3" size="sm">
            Educational Organisation
          </Heading>
          <Text>{data.edOrg}</Text>
          <Heading as="h3" size="sm">
            Course
          </Heading>
          <Text>{data.course}</Text>
          <Heading as="h3" size="sm">
            Email ID
          </Heading>
          <Text>{data.email}</Text>
          <Heading as="h3" size="sm">
            Whatsapp
          </Heading>
          <Text>{data.whatsapp}</Text>
          <Heading as="h3" size="sm">
            Date Of Birth
          </Heading>
          <Text>{data.dob}</Text>
        </Box>
      </Box>
    </div>
  );
}

export default AboutSection;
