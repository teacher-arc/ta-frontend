import React from "react";
import { useTranslation } from "react-i18next";
import { Icon, Box } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
const FileItem = ({ file = { name: "untitled" }, handleDeleteFile }) => {
  return (
    <Box
      className="FileItem-main"
      key={file.name}
      pb="0.5rem"
      alignContent="center"
      display="flex"
      justifyContent="space-between"
    >
      {/* <icon>document page icon</icon> */}
      <p>{file.name}</p>
      {/* {file.isUploading && <icon spinner/>} */}
      {/* {!file.isUploading && <icon delete onClick={deleteFile(file.name)}}/> */}
      <button onClick={() => handleDeleteFile(file)}>
        <Icon
          as={AiFillDelete}
          className="FileItem-icon"
          boxSize="4"
          mt="4px"
          color="#444444"
        />
      </button>

      {/* <Icon as={ImSpinner9} className="FileItem-icon" boxSize="4" mt="4px"/> */}
    </Box>
  );
};

export default FileItem;
