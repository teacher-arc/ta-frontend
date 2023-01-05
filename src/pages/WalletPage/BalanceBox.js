import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { userSelector } from "../../slices/user.slice";

function BalanceBox({ balance }) {
  const { t } = useTranslation();

  return (
    <div>
      <Box
        position="relative"
        width="100%"
        minW="545px"
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        padding="24px"
        display="flex"
        justifyContent="space-between"
        margin="10px"
        marginTop="100px"
        marginLeft="80px"
        minH="100px"
        bg="#EAF0FF"
        zIndex="3"
      >
        <Box>
          <Heading as="h2" fontWeight="900" color="#003286">
            {balance}
          </Heading>
          <Text fontSize="lg" color="#003286">
            {t(" Current Wallet Balance")}
          </Text>
        </Box>
        <Button
          leftIcon={<AddIcon />}
          variant="inputCustom"
          borderRadius="10px"
          padding="20px"
          marginTop="20px"
        >
          Add money to Wallet
        </Button>
      </Box>
    </div>
  );
}

export default BalanceBox;
