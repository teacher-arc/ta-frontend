import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import illustration from "./../Assets/profileillus.svg";
function NameSection({ name, location }) {
  return (
    <div>
      <Box
        width="70%"
        minW="445px"
        height="145px"
        bg="linear-gradient(98.9deg, #96DAEE -55.91%, rgba(255, 255, 255, 0) 151.85%)"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        padding="24px"
        paddingBottom="0"
        display="flex"
        margin="10px"
      >
        <Box as="span" width="90%">
          <Heading as="h1">{name}</Heading>
          <Text>
            <Icon as={GoLocation} /> {location}
          </Text>
        </Box>
        <VStack>
          <Button as="span" variant="solid" float="right">
            Edit Profile
          </Button>
          <Image src={illustration} top="60%" />
        </VStack>
      </Box>
    </div>
  );
}

export default NameSection;
