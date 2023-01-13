import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { VStack, Input, Button, FormControl, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "./index.css";
import { createUserThunk, userSelector } from "./../../slices/user.slice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function SignUpForm() {
  const { t } = useTranslation();

  const { register, errors, handleSubmit } = useForm();
  const toast = useToast();
  const { isSuccess, isFetching, errorMessage, isError } =
    useSelector(userSelector);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast({
        position: "top-right",
        title: "Password and Confirm Password do not match",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    const payload = { email: data.email, password: data.password };
    dispatch(createUserThunk(payload));
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        position: "top-right",
        title: "Account created Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    if (isError) {
      toast({
        position: "top-right",
        title: `${errorMessage}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, isFetching, isError]);
  return (
    <div className="SignUpForm-main">
      <FormControl>
        <VStack spacing={8}>
          <Input
            size="lg"
            borderRadius="24px"
            boxShadow="input-shadow"
            type="email"
            placeholder={t("Email Id")}
            {...register("email")}
            id="email"
          />
          <Input
            size="lg"
            borderRadius="24px"
            boxShadow="input-shadow"
            type="password"
            placeholder={t("Password")}
            {...register("password")}
            id="password"
          />
          <Input
            size="lg"
            borderRadius="24px"
            boxShadow="input-shadow"
            type="password"
            placeholder={t("Confirm Password")}
            {...register("confirmPassword")}
            id="confirm_password"
          />
          <Button
            variant="solid"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {t("Sign Up")}
          </Button>
        </VStack>
      </FormControl>
    </div>
  );
}

export default SignUpForm;
