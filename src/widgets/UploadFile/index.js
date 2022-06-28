import React from "react";
import UploadButton from "./UploadButton";
import FileList from "./FileList";
import { Box } from "@chakra-ui/react";
function UploadFile() {
  return (
    <div>
      <Box
        width="90%"
        minH="280px"
        borderRadius="24px"
        padding="24px"
        paddingBottom="0"
        display="flex"
        flexDirection="column"
        margin="10px"
        bgColor="#FFFFFF"
      >
        <UploadButton />
        <FileList />
      </Box>
    </div>
  );
}

export default UploadFile;
