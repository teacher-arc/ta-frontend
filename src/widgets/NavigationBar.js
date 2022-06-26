import { Image, Flex, Button, HStack, Link } from "@chakra-ui/react";
import * as ROUTELIST from "./../routes";
import Logo from "./../Assets/OSTREAK.png";
import React from "react";

const NAV_ITEM = {
  HOME: "Home",
  ABOUT: "About",
  MENTOR_MEET: "Mentor Meet",
  WALLET: "Wallet",
  CONTACT: "Contact",
};
export default function NavigationBar() {
  return (
    <div id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-around">
        <Image src={Logo} h="30px" w="50px" />

        <HStack as="nav" spacing="20" mx={32}>
          <Link href={ROUTELIST.HOME}>
            <Button variant="nav">{NAV_ITEM.HOME}</Button>
          </Link>
          <Link href={ROUTELIST.ABOUT}>
            <Button variant="nav">{NAV_ITEM.ABOUT}</Button>
          </Link>
          <Link href={ROUTELIST.POST_ASSIGNMENT}>
            <Button variant="nav">{NAV_ITEM.MENTOR_MEET}</Button>
          </Link>
          <Button variant="nav">{NAV_ITEM.WALLET}</Button>
          <Button variant="nav">{NAV_ITEM.CONTACT}</Button>
        </HStack>
      </Flex>
    </div>
  );
}
