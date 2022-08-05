import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Textarea,
  Input,
  useToast,
  Icon,
} from "@chakra-ui/react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  assignmentSelector,
  clearState,
  createAssignment,
  UploadFileThunk,
} from "./../../slices/assignment.slice";
import UploadFile from "../../widgets/UploadFile";
import FormLabel from "./../../components/FormLabel";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import PostBookIllustrations from "../../widgets/PostBookIllustrations";
import { HOME } from "./../../routes";

function PostAssignment() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, reset } = useForm();
  const { assignmentId, questionFiles, referenceMaterials } =
    useSelector(assignmentSelector);
  const email = localStorage.getItem("email");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const payLoad = { ...data, userEmail: email, type: "ASSIGNMENT" };
    dispatch(createAssignment(payLoad));
    reset({
      description: "",
      title: "",
      subject: "",
      dateTime: "",
    });
  };
  const createFormData = (obj) => {
    const payload = new FormData();
    payload.append("file", obj.file);
    payload.append("fileType", obj.fileType);
    payload.append("userEmail", email);
    payload.append("assignmentId", assignmentId);

    return payload;
  };
  useEffect(() => {
    if (assignmentId == "") return;
    for (let i = 0; i < questionFiles.length; i++) {
      let payload = createFormData(questionFiles[i]);
      dispatch(UploadFileThunk(payload));
    }

    for (let i = 0; i < referenceMaterials.length; i++) {
      let payload = createFormData(referenceMaterials[i]);
      dispatch(UploadFileThunk(payload));
    }
    dispatch(clearState());
    setLoading(false);
    toast({
      title: "Request Added",
      description: "Assignment Created Successfully!!",
      variant: "top-accent",
      duration: 5000,
      isClosable: true,
    });
    navigate(HOME);
  }, [assignmentId]);

  return (
    <div className="PostAssignment-main">
      <Center>
        <Box
          width="70%"
          minW="445px"
          borderRadius="24px"
          padding="24px"
          margin="10px"
          minH="450px"
          bgColor="#C8DCFF"
          position="relative"
        >
          <Box display="flex" direction="row" paddingBottom="10px">
            <Box w="33%" h="90%">
              <FormLabel name="Question/Instructions" />
              <Textarea
                placeHolder="Write your description..."
                backgroundColor="#ffffff"
                borderRadius="24px"
                width="90%"
                mx="0.5rem"
                size="lg"
                {...register("description")}
              />
              <Input
                placeHolder="Title"
                borderRadius="24px"
                mt="1.5rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#ffffff"
                {...register("title")}
              />
              <Input
                placeHolder="Subject Name"
                borderRadius="24px"
                mt="1.5rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#ffffff"
                {...register("subject")}
              />
              <Input
                borderRadius="24px"
                mt="2rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#ffffff"
                type="datetime-local"
                {...register("dateTime")}
              />
            </Box>
            <Box w="33%" h="90%">
              <FormLabel name="Question Files" />
              <UploadFile fileType="QUESTION_FILE" />
            </Box>
            <Box w="33%" h="90%">
              <FormLabel name="Reference Material" />
              <UploadFile fileType="REFERENCE_MATERIAL" />
            </Box>
          </Box>
          <Center>
            <Button onClick={handleSubmit(onSubmit)}>
              {loading ? (
                <Icon
                  as={ImSpinner9}
                  className="FileItem-icon"
                  boxSize="4"
                  mt="4px"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Center>
        </Box>
      </Center>
    </div>
  );
}

export default PostAssignment;
