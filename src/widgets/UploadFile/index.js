import React from "react";
import { useTranslation } from "react-i18next";
import UploadButton from "./UploadButton";
import FileList from "./FileList";
import { Box } from "@chakra-ui/react";
function UploadFile({ fileType }) {
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
        <UploadButton fileType={fileType} />
        <FileList fileType={fileType} />
      </Box>
    </div>
  );
}

export default UploadFile;
