import {
  Image,
  Flex,
  Button,
  HStack,
  Link,
  Icon,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import * as ROUTELIST from "../../routes";
import { useTranslation } from "react-i18next";

import Logo from "./../../Assets/Logo.png";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../slices/user.slice";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NAV_ITEM = {
  HOME: "Home",
  ABOUT: "About",
  MENTOR_MEET: "Mentor Meet",
  POST_ASSIGNMENT: "Post Assignment",
  LIVE_SESSION: "Live Session",
  WALLET: "Wallet",
  CONTACT: "Contact",
};

function NavbarDesktop({ email, handleLogOut }) {
  const { t } = useTranslation();

  return (
    <Flex
      w="100%"
      px="6"
      py="5"
      align="center"
      justify="space-between"
      display={{ sm: "none", md: "none", lg: "flex", xl: "flex" }}
    >
      <Image src={Logo} h="50px" w="150px" />

      <HStack as="nav">
        <Link href={ROUTELIST.HOME}>
          <Button variant="nav">{t(NAV_ITEM.HOME)}</Button>
        </Link>
        <Link href={ROUTELIST.POST_ASSIGNMENT}>
          <Button variant="nav">{t(NAV_ITEM.POST_ASSIGNMENT)}</Button>
        </Link>
        <Link href={ROUTELIST.BOOK_LIVE_SESSION}>
          <Button variant="nav">{t(NAV_ITEM.LIVE_SESSION)}</Button>
        </Link>

        <Link href={ROUTELIST.ABOUT}>
          <Button variant="nav">{t(NAV_ITEM.ABOUT)}</Button>
        </Link>
        <Link href={ROUTELIST.WALLET}>
          <Button variant="nav">{t(NAV_ITEM.WALLET)}</Button>
        </Link>
        <Button variant="nav">{t(NAV_ITEM.CONTACT)}</Button>
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
            <MenuItem onClick={handleLogOut}>{t("Log Out")}</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link href={ROUTELIST.AUTH}>
          <Button variant="signup">{t("Signup")}</Button>
        </Link>
      )}
    </Flex>
  );
}

function NavbarMobile() {
  const { t } = useTranslation();

  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      bgColor="gray.50"
      overflowY="auto"
      flexDir="column"
      display={{ sm: "flex", md: "flex", lg: "none", xl: "none" }}
    >
      <Flex justify="space-between">
        <Image src={Logo} h="50px" w="150px" />
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mt={2}
          mr={2}
          icon={<HamburgerIcon />}
          variant="ghost"
          display={display == "flex" ? "none" : "flex"}
          onClick={() => changeDisplay("flex")}
        />
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          variant="ghost"
          icon={<CloseIcon />}
          display={display == "flex" ? "flex" : "none"}
          onClick={() => changeDisplay("none")}
        />
      </Flex>

      <Flex flexDir="column" align="center" display={display}>
        <Link href={ROUTELIST.HOME}>
          <Button variant="nav">{t(NAV_ITEM.HOME)}</Button>
        </Link>
        <Link href={ROUTELIST.POST_ASSIGNMENT}>
          <Button variant="nav">{t(NAV_ITEM.POST_ASSIGNMENT)}</Button>
        </Link>
        <Link href={ROUTELIST.BOOK_LIVE_SESSION}>
          <Button variant="nav">{t(NAV_ITEM.LIVE_SESSION)}</Button>
        </Link>

        <Link href={ROUTELIST.ABOUT}>
          <Button variant="nav">{t(NAV_ITEM.ABOUT)}</Button>
        </Link>
        <Link href={ROUTELIST.WALLET}>
          <Button variant="nav">{t(NAV_ITEM.WALLET)}</Button>
        </Link>
        <Button variant="nav">{t(NAV_ITEM.CONTACT)}</Button>
      </Flex>
    </Flex>
  );
}
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
      <NavbarDesktop email={email} handleLogOut={handleLogOut} />
      <NavbarMobile />
    </div>
  );
}
