import React from "react";
import { Box, Button, Center, Textarea, Input } from "@chakra-ui/react";
import "./index.css";
import UploadFile from "../../widgets/UploadFile";
import FormLabel from "./../../components/FormLabel";
function PostAssignment() {
  return (
    <div className="PostAssigment-main">
      <Center>
        <Box
          width="70%"
          minW="445px"
          borderRadius="24px"
          padding="24px"
          margin="10px"
          minH="450px"
          bgColor="#C8DCFF"
          position="relative"
        >
          <Box display="flex" direction="row" paddingBottom="10px">
            <Box w="33%" h="90%">
              <FormLabel name="Question/Instructions" />
              <Textarea
                placeHolder="Write your description..."
                backgroundColor="#ffffff"
                borderRadius="24px"
                width="90%"
                mx="0.5rem"
                size="lg"
              />
              <Input
                placeHolder="Subject Name"
                borderRadius="24px"
                mt="2rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#ffffff"
              />
              <Input
                placeHolder="Subject Name"
                borderRadius="24px"
                mt="2rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#ffffff"
                type="datetime-local"
              />
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
      </Center>
    </div>
  );
}

export default PostAssignment;
