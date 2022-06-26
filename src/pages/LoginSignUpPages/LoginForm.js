import React from 'react'
import { VStack, Input, Button } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import './index.css'

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className='SignUpForm-main'>
        <VStack spacing={8} >
         <Input
          size="lg"
          borderRadius="24px"
          boxShadow='input-shadow'
          color="#3C71C9"
           type="email"
           placeholder="Email Id"
           {...register("email", {
             required: "Please enter your email Id",
             minLength: 3,
             maxLength: 80
           })}
         />
         <Input
          size="lg"
          borderRadius="24px"
          boxShadow='input-shadow'
           type="password"
           placeholder="Password"
           {...register("password", {
             required: "Please enter Password",
             minLength: { value: 8, message: "Too short" }
           })}
         />
         <Button
         variant='solid'
           type="submit"
         >
           Login
         </Button>
</VStack>
    </div>
  )
}

export default LoginForm