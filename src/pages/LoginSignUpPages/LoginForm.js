import React, { useEffect } from "react";
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userSelector, clearState } from "./../../slices/user.slice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PROFILE } from "./../../routes";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, errors, handleSubmit, reset } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  useEffect(() => {
    if (isError) {
      alert(errorMessage);
      reset({
        password: "",
      });
      dispatch(clearState());
    }
    if (isSuccess) {
      console.log(isSuccess);
      navigate(PROFILE);
      dispatch(clearState());
    }
  }, [isError, isSuccess]);
  if (isFetching) return <div>loading...</div>;
  return (
    <div className="SignUpForm-main">
      <FormControl>
        <VStack>
          <Input
            size="lg"
            borderRadius="24px"
            boxShadow="input-shadow"
            color="#3C71C9"
            type="email"
            placeholder="Email Id"
            {...register("email")}
            id="email"
          />
          <Input
            size="lg"
            borderRadius="24px"
            boxShadow="input-shadow"
            type="password"
            placeholder="Password"
            {...register("password")}
            id="password"
          />
          <Button
            variant="solid"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </VStack>
      </FormControl>
    </div>
  );
}

export default LoginForm;
