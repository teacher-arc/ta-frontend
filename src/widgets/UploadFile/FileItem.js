import React from "react";
import { Icon, Box } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
const FileItem = ({ file = { name: "untitled" }, deleteFile }) => {
  return (
    <Box
      className="FileItem-main"
      key={file.name}
      pb="0.5rem"
      alignContent="center"
      display="flex"
      justifyContent="space-around"
    >
      {/* <icon>document page icon</icon> */}
      <p>cat_compoentn_egve</p>
      {/* {file.isUploading && <icon spinner/>} */}
      {/* {!file.isUploading && <icon delete onClick={deleteFile(file.name)}}/> */}
      <Icon
        as={AiFillDelete}
        className="FileItem-icon"
        boxSize="4"
        mt="4px"
        color="#444444"
      />
      {/* <Icon as={ImSpinner9} className="FileItem-icon" boxSize="4" mt="4px"/> */}
    </Box>
  );
};

export default FileItem;
