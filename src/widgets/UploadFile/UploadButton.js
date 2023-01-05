import { Box, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillFileAdd } from "react-icons/ai";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  assignmentSelector,
  addToQuestionFiles,
  addToReferenceMaterial,
} from "./../../slices/assignment.slice";

function UploadFile({ fileType }) {
  const dispatch = useDispatch();

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    const payload = { fileType, file };
    if (fileType === "QUESTION_FILE") dispatch(addToQuestionFiles(payload));
    if (fileType === "REFERENCE_MATERIAL")
      dispatch(addToReferenceMaterial(payload));
  };
  return (
    <Box className="UploadButton-main" width="100%">
      <div className="UploadButton-group">
        <input
          type="file"
          className="UploadButton-input"
          onChange={uploadHandler}
        />
        <Button
          leftIcon={<AiFillFileAdd boxSize={6} />}
          variant="inputCustom"
          className="UploadButton-button"
        >
          Add a File
        </Button>
      </div>
    </Box>
  );
}

export default UploadFile;
