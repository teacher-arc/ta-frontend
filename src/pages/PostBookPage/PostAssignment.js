import React from "react";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import "./index.css";
import UploadFile from "../../widgets/UploadFile";
import FormLabel from "./../../components/FormLabel";
function PostAssignment() {
  return (
    <div className="PostAssigment-main">
      <Box
        width="70%"
        minW="445px"
        borderRadius="24px"
        padding="24px"
        margin="10px"
        minH="450px"
        bgColor="#C8DCFF"
      >
        <Box display="flex" direction="row" paddingBottom="10px">
          <Box w="33%" h="90%">
            <FormLabel name="Question/Instructions" />
            <UploadFile />
          </Box>
          <Box w="33%" h="90%">
            <FormLabel name="Question Files" />
            <UploadFile />
          </Box>
          <Box w="33%" h="90%">
            <FormLabel name="Reference Material" />
            <UploadFile />
          </Box>
        </Box>
        <Center>
          <Button>Submit</Button>
        </Center>
      </Box>
    </div>
  );
}

export default PostAssignment;
