import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function TableRow({ type, id, date, value }) {
  return (
    <Box
      width="100%"
      display="flex"
      borderTop="2px solid #999999"
      justifyContent="space-between"
      minH="100px"
      padding="20px"
      paddingRight="50px"
      bg="#EAF0FF"
    >
      <div>
        <Text fontSize="lg">{type}</Text>

        <Text fontSize="md">{id}</Text>

        <Text fontSize="sm">{date}</Text>
      </div>
      <Text paddingTop="20px" color={value >= 0 ? "green" : "red"}>
        {value}
      </Text>
    </Box>
  );
}

export default TableRow;
