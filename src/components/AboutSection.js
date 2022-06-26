import React from "react";
import { Heading, Text, Box, Image } from "@chakra-ui/react";
import profilephoto from "./../Assets/profiledummyimage.png";

function AboutSection() {
  return (
    <div>
      <Box
        maxWidth="20%"
        minW='345px'
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        zIndex={2}
        position='absolute'
        top='8rem'
        left='10%'
      >
        <Image src={profilephoto} size='md' borderTopRadius="24px" paddingBottom="10px" />
        <Box p={4}>
        <Heading as="h3" size="sm">
          About
        </Heading>
        <Text noOfLines={3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </Text>
        <Heading as="h3" size="sm">
          Educational Organisation
        </Heading>
        <Text>Stanford University</Text>
        <Heading as="h3" size="sm">
          Course
        </Heading>
        <Text>B.Sc Computer Science</Text>
        <Heading as="h3" size="sm">
          Email ID
        </Heading>
        <Text>goergewillams@gmail.com</Text>
        <Heading as="h3" size="sm">
          Whatsapp
        </Heading>
        <Text>+3583475486</Text>
        <Heading as="h3" size="sm">
          Date Of Birth
        </Heading>
        <Text>12/05/1995</Text>
      </Box>
      </Box>
    </div>
  );
}

export default AboutSection;
