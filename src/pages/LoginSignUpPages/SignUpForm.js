import React from "react";
import { VStack, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "./index.css";
import { createUser } from "./../../services/auth.service";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async () => {
    try {
      const response = await createUser({
        email: "singsshsss34@gmail.com",
        password: "sheetal@345",
      });
      console.log(response);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="SignUpForm-main">
      <VStack spacing={8}>
        <Input
          size="lg"
          borderRadius="24px"
          boxShadow="input-shadow"
          type="email"
          placeholder="Email Id"
          {...register("email", {
            required: "Please enter your email Id",
            minLength: 3,
            maxLength: 80,
          })}
        />
        <Input
          size="lg"
          borderRadius="24px"
          boxShadow="input-shadow"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Please enter Password",
            minLength: { value: 8, message: "Too short" },
          })}
        />
        <Input
          size="lg"
          borderRadius="24px"
          boxShadow="input-shadow"
          type="password"
          placeholder="Confirm Password"
          {...register("password", {
            required: "Please enter Password",
            minLength: { value: 8, message: "Too short" },
          })}
        />
        <Button variant="solid" type="submit" onClick={handleFormSubmit}>
          Sign Up
        </Button>
      </VStack>
    </div>
  );
}

export default SignUpForm;
