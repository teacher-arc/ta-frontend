import React, { useState } from "react";
import NavigationBar from "../../widgets/Navbar/NavigationBar";
import SignUpIllustrations from "../../widgets/SignupIllustrations/SignUpIllustrations";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { Flex, Spacer, Box, Heading, Link } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginLink = () => setShowLogin(true);
  const handleSignUpLink = () => setShowLogin(false);
  return (
    <div className="Signup-main">
      <Flex minWidth="max-content" alignItems="center" gap="2" height="90vh">
        <Box width="50%" height="100%" pt="2%">
          <Heading pl="4rem" mb="5%" pb="5%">
            Welcome
          </Heading>
          <Link px={4} ml={16} my="5%" onClick={handleSignUpLink}>
            Signup
          </Link>
          <Link px={4} ml={16} my="5%" onClick={handleLoginLink}>
            Login
          </Link>
          {showLogin ? <LoginForm /> : <SignUpForm />}
        </Box>
        <SignUpIllustrations />
      </Flex>
    </div>
  );
};

export default Auth;
