import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Button,
  Center,
  Textarea,
  Text,
  Input,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
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

function BookLiveSession() {
  const { t } = useTranslation();

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
    const payLoad = { ...data, userEmail: email, type: "LIVE_SESSION" };
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
      description: "Live Session request Created Successfully!!",
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
          <Box
            width="100%"
            borderRadius="24px"
            padding="24px"
            marginRight="10px"
            minH="200px"
            bgColor="#FFFFFF"
            position="relative"
          >
            <Text fontSize="xl" width="100%">
              <Icon
                as={ArrowRightIcon}
                className="FileItem-icon"
                boxSize="6"
                padding="4px"
                margin="4px"
                borderRadius="24px"
                backgroundColor="#FFE070"
                color="#FFFFFF"
                mt="4px"
              />
              {t("Interact with real tutors in real time.")}
            </Text>
            <Text fontSize="xl" width="100%">
              <Icon
                as={ArrowRightIcon}
                className="FileItem-icon"
                boxSize="6"
                padding="4px"
                margin="4px"
                borderRadius="24px"
                backgroundColor="#FFE070"
                color="#FFFFFF"
                mt="4px"
              />
              {t("Book a session, set the duration and make payment.")}
            </Text>{" "}
            <Text fontSize="xl" width="100%">
              <Icon
                as={ArrowRightIcon}
                className="FileItem-icon"
                boxSize="6"
                padding="4px"
                margin="4px"
                borderRadius="24px"
                backgroundColor="#FFE070"
                color="#FFFFFF"
                mt="4px"
              />
              {t(
                "Upload reference material and provide instructions for the tutor."
              )}
            </Text>
            <Text fontSize="xl" width="100%">
              <Icon
                as={ArrowRightIcon}
                className="FileItem-icon"
                boxSize="6"
                padding="4px"
                marginRight="10px"
                margin="4px"
                borderRadius="24px"
                backgroundColor="#FFE070"
                color="#FFFFFF"
                mt="4px"
              />
              {t(
                "The tutor will be ready at the session time to solve your problem."
              )}
            </Text>
          </Box>
          <Box display="flex" direction="row" paddingBottom="10px">
            <Box w="33%" h="90%">
              <FormLabel name={t("Question/Instructions")} />
              <Textarea
                placeHolder={t("Write your description...")}
                backgroundColor="#ffffff"
                borderRadius="24px"
                width="90%"
                mx="0.5rem"
                size="lg"
                {...register("description")}
              />
              <Input
                placeHolder={t("Title")}
                borderRadius="24px"
                mt="1.5rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#FFE070"
                {...register("title")}
              />
              <Input
                placeHolder={t("Subject Name")}
                borderRadius="24px"
                mt="1.5rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#FFE070"
                {...register("subject")}
              />
              <Input
                borderRadius="24px"
                mt="2rem"
                width="90%"
                mx="0.5rem"
                size="md"
                backgroundColor="#FFE070"
                type="datetime-local"
                {...register("dateTime")}
              />
            </Box>
            <Box w="33%" h="90%">
              <FormLabel name={t("Question Files")} />
              <UploadFile fileType="QUESTION_FILE" />
            </Box>
            <Box w="33%" h="90%">
              <FormLabel name={t("Reference Material")} />
              <UploadFile fileType="REFERENCE_MATERIAL" />
            </Box>
          </Box>
          <Center>
            <Button onClick={handleSubmit(onSubmit)} variant="live">
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

export default BookLiveSession;
