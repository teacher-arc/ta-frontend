import React, { useEffect } from "react";
import RectangleIllustration from "../../widgets/RectangleIllustration";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import TableRow from "./TableRow";
import BalanceBox from "./BalanceBox";
import EmptyWallet from "./../../Assets/emptywallet.png";
import walletpageillustration from "./../../Assets/money.png";
import { useSelector, useDispatch } from "react-redux";
import {
  getTransactionByEmailThunk,
  userSelector,
} from "./../../slices/user.slice";
import "./index.css";
const WalletPage = () => {
  const data = useSelector(userSelector);
  console.log("data", data);
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const { transactions } = data;
  useEffect(() => {
    dispatch(getTransactionByEmailThunk({ email }));
  }, []);
  const tableData = transactions.map((data) => (
    <TableRow
      id={data._id}
      value={data.transactionValue}
      date={data.updatedAt}
      type={data.transactionType}
    />
  ));
  const empty = (
    <Center>
      <img src={EmptyWallet} height="220px" width="220px" padding="20px" />
    </Center>
  );
  return (
    <div className="walletpage-main">
      <Box pos="relative" width="100%" display="flex" margin="45px" zIndex="0">
        <img src={walletpageillustration} />
        <BalanceBox balance={data.balance} />
        <RectangleIllustration />
      </Box>
      <Box position="relative" alignItems="right" marginLeft="35%">
        <Heading as="h6">Transaction Details</Heading>
        <Box
          className="walletpage-table-container"
          position="relative"
          width="60%"
          minW="445px"
          boxShadow="0px 4px 44px 0px #00000040"
          borderRadius="24px"
          paddingBottom="0"
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          margin="10px"
          minH="300px"
          overflowY="auto"
          maxH="400px"
          bg="#FFFFFF"
        >
          <Box
            width="100%"
            display="flex"
            borderTopRadius="24px"
            padding="30px"
            justifyContent="space-between"
            minH="100px"
            position="sticky"
            top="0"
            bg="#003286"
          >
            <Text fontSize="lg" color="#FFFFFF">
              Summary
            </Text>
            <Text fontSize="lg" color="#FFFFFF">
              Value
            </Text>
          </Box>
          {transactions.length > 0 ? tableData : empty}
        </Box>
      </Box>
    </div>
  );
};

export default WalletPage;
