import {
  Image,
  Flex,
  Button,
  HStack,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import * as ROUTELIST from "./../routes";
import Logo from "./../Assets/Logo.png";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./../slices/user.slice";

const NAV_ITEM = {
  HOME: "Home",
  ABOUT: "About",
  MENTOR_MEET: "Mentor Meet",
  POST_ASSIGNMENT: "Post Assignment",
  LIVE_SESSION: "Live Session",
  WALLET: "Wallet",
  CONTACT: "Contact",
};
export default function NavigationBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const handleLogOut = () => {
    dispatch(logOut(email));
    navigate(ROUTELIST.HOME);
  };
  return (
    <div id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Image src={Logo} h="50px" w="150px" />

        <HStack as="nav">
          <Link href={ROUTELIST.HOME}>
            <Button variant="nav">{NAV_ITEM.HOME}</Button>
          </Link>
          <Link href={ROUTELIST.POST_ASSIGNMENT}>
            <Button variant="nav">{NAV_ITEM.POST_ASSIGNMENT}</Button>
          </Link>
          <Link href={ROUTELIST.BOOK_LIVE_SESSION}>
            <Button variant="nav">{NAV_ITEM.LIVE_SESSION}</Button>
          </Link>

          <Link href={ROUTELIST.ABOUT}>
            <Button variant="nav">{NAV_ITEM.ABOUT}</Button>
          </Link>
          <Button variant="nav">{NAV_ITEM.WALLET}</Button>
          <Button variant="nav">{NAV_ITEM.CONTACT}</Button>
        </HStack>

        {email ? (
          <Menu>
            <MenuButton as={Button} variant="plain">
              <Icon
                as={CgProfile}
                className="FileItem-icon"
                boxSize="10"
                margin="4px"
                borderRadius="24px"
                backgroundColor="#FFE070"
                color="#FFFFFF"
                mt="4px"
              />
            </MenuButton>
            <MenuList>
              <Link href={ROUTELIST.PROFILE}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link href={ROUTELIST.AUTH}>
            <Button variant="signup">Signup</Button>
          </Link>
        )}
      </Flex>
    </div>
  );
}
