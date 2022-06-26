import React from 'react'
import { Box } from "@chakra-ui/react"
import { HStack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { EmailIcon,ArrowForwardIcon } from '@chakra-ui/icons'

function NotificationPanel() {
  return (
    <div>
<Box border='1px' borderColor='gray.200' color='red.50' width="100%" height="10%" padding={10} >                                            
    <HStack direction='row' align='center' spacing={12}>
    <Box border='2px' borderColor='red.100' height="10%" width="50px" margin={3}>
    </Box>  
    <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button>
  <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button>
  <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button>
    </HStack>
</Box>
    </div>
  )
}

export default NotificationPanel