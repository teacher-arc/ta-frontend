import { Box, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "./index.css";
function UploadFile({ files, setFiles, removeFile }) {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    file.isUploading(true);
    setFiles([...files, file]);

    //upload file
    const formData = new FormData();
    formData.append(file.name, file, file.name);

    // axios.post('',formData)
    // .then((res) => {
    //     file.isUploading(false);
    //     setFiles([...files,file]);
    // })
    // .catch((err) => {
    //     //inform error
    //     console.error(err);
    //     removeFile(file.name);
    // })
  };
  return (
    <Box className="UploadButton-main" width="100%">
      <div className="UploadButton-group">
        <input type="file" />
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
