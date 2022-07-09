import React from "react";
import FileItem from "./FileItem";
import { useSelector, useDispatch } from "react-redux";
import {
  assignmentSelector,
  clearState,
  createAssignment,
  deleteFile,
  UploadFileThunk,
} from "./../../slices/assignment.slice";
const FileList = ({ fileType }) => {
  const dispatch = useDispatch();
  let files = [];
  const { questionFiles, referenceMaterials } = useSelector(assignmentSelector);

  if (fileType === "QUESTION_FILE") files = questionFiles;
  else if (fileType === "REFERENCE_MATERIAL") files = referenceMaterials;

  const deleteFileHandler = (file) => {
    dispatch(deleteFile({ file, fileType }));
  };
  return (
    <div className="file-list">
      {files &&
        files.map((f) => (
          <FileItem
            key={f.file.name}
            file={f.file}
            handleDeleteFile={deleteFileHandler}
          />
        ))}
    </div>
  );
};

export default FileList;
