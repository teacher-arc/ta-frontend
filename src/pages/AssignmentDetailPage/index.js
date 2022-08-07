import React, { useEffect, useState } from "react";
import RectangleIllustration from "../../widgets/RectangleIllustration";
import { Box, Heading, Text, Center, Image } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import { useParams } from "react-router-dom";
import { getAssignment } from "../../services/assignment.service";
import AssignmentDetailArea from "./AssignmentDetailArea";
function AssignmentDetailsPage() {
  const [assignmentDetails, setAssignmentDetails] = useState({});
  const params = useParams();
  const id = params.id;
  const getAssignmentById = async (id) => {
    try {
      const response = await getAssignment(id);
      const assignmentDetails = response.data;
      console.log(assignmentDetails);
      setAssignmentDetails(assignmentDetails);
    } catch (e) {
      console.log("Error", e.response);
    }
  };
  useEffect(() => {
    getAssignmentById(id);
  }, []);

  return (
    <div>
      <Box pos="relative" width="100%" display="flex" zIndex="-1">
        <RectangleIllustration />
      </Box>

      <Heading as="h4" margin="0 auto" width="60%" paddingBottom="20px">
        Transaction Details
      </Heading>

      <Box
        position="relative"
        borderRadius="24px"
        margin="0 auto"
        alignItems="right"
        height="70vh"
        width="60%"
        backgroundColor="#6B96E1"
        display="flex"
        direction="column"
      >
        <ProgressBar />
        <AssignmentDetailArea data={assignmentDetails} />
      </Box>
    </div>
  );
}

export default AssignmentDetailsPage;
