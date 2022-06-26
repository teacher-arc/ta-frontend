import React from 'react'
import RectangleIllustration from '../../widgets/RectangleIllustration'
import { Box, Heading} from "@chakra-ui/react";
import TableRow from './TableRow';
import BalanceBox from './BalanceBox';
import EmptyWallet from './../../Assets/emptywallet.png'
import walletpageillustration from './../../Assets/money.png'
const WalletPage = () => {
  return (
    <div>
        <Box pos='relative' width='100%'>
        <RectangleIllustration/>
        <img src={walletpageillustration}/>
        <BalanceBox/>
        <Heading as='h6'>Transaction Details</Heading>
        <Box
        position='relative'
        width="60%"
        minW='445px'
        boxShadow="0px 4px 44px 0px #00000040"
        borderRadius="24px"
        padding='24px'
        paddingBottom='0'
        display='flex'
        margin='10px'
        minH="300px"
        bg='#FFFFFF'
        zIndex='3'
      >
      <TableRow/> 
      <img src={EmptyWallet}/>
      </Box>
        </Box>
    </div>
  )
}

export default WalletPage