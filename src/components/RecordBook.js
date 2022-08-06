import { Heading, Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function RecordBook({ records }) {
  const recordsToDisplay = records.map((record) => {
    return (
      <Link to={`/assignment-details/${record._id}`}>
        <Box
          width="100%"
          display="flex"
          borderRadius="24px"
          justifyContent="space-between"
          alignItems="center"
          minH="100px"
          padding="20px"
          margin="10px"
          paddingRight="50px"
          bgColor="#FFFFFF"
        >
          <div>
            <Text fontSize="lg" fontWeight="900" cursor="pointer">
              {record.title}
            </Text>

            <Text fontSize="md">
              <b>ID : </b>
              {record._id}
            </Text>

            <Text fontSize="sm">{record.dateTime}</Text>
          </div>
          <Button size="sm" variant="record" padding={"6px 30px 6px 30px"}>
            {record.status}
          </Button>
          <Text>
            <b>Price : $</b>
            {record?.price}
          </Text>
        </Box>
      </Link>
    );
  });
  return (
    <div>
      <Heading as="h2">Record Book</Heading>
      <Box
        width="70%"
        minW="445px"
        bg="#EAF0FF"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        padding="24px"
        display="flex"
        maxH="450px"
        overflowY="scroll"
        overflowX={"hidden"}
        flexDirection="column"
        margin="10px"
        minH="450px"
      >
        {recordsToDisplay}
      </Box>
    </div>
  );
}

export default RecordBook;
