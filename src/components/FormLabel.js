import { Box, Center } from "@chakra-ui/react";
import React from "react";

function FormLabel({ name = "untitled" }) {
  return (
    <div>
      <Box
        width="90%"
        textAlign="center"
        borderRadius="24px"
        padding="10px"
        margin="10px"
        bgColor="#FFFFFF"
      >
        {name}
      </Box>
    </div>
  );
}

export default FormLabel;
