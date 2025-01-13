import React from 'react';
import { Flex, Text, Button, HStack, Container, Link} from '@chakra-ui/react';
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW='1140px' px={4} bg={useColorModeValue('gray.300', 'gray.800')}>
      <Flex 
        h={16} 
        alignItems='cneter'
        justifyContent='space-between'
        flexDir={{
            base:'column',
            sm:'row'
        }}
      > 
      
      <Text
        fontSize={25}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        bgClip="text"
        display='flex'
        verticalAlign='middle'
        
        >
        <Link href={'/'}>Product Store 🛒</Link>
      </Text>
      
       <HStack spacing={2} alignItems={'center'}>
        <Link href={'/create'}>
          <Button>
            <FiPlusSquare fontSize={20}/>
          </Button>
        </Link>
        <Button variant="outline" onClick={toggleColorMode}>
          {colorMode === "light" ? <MdOutlineWbSunny /> : <FaMoon />}
        </Button>
       </HStack>
      </Flex>
    </Container>
  )
}


export default Navbar;