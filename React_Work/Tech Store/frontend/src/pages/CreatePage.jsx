import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, Button, VStack, Container, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:'',
    price:'',
    image:''
  });

  const handleAddProduct = () => {
    // add newProduct to the backend API
    // setNewProduct to an empty object
    console.log(newProduct);
  }


  return (
    <Container maxW='2xl'>
      <VStack spacing={8}>
        <Heading as='h1' fontSize='5xl' textAlign='center' mb={8} paddingTop='2rem'>
          Create New Product
        </Heading>

        <Box 
        w='full' bg={useColorModeValue('white','gray.900')}
        p={6} rounded='16px' shadow='1g'
        >
          <VStack spacing={4}>
          <Input 
              placeholder={'Product Name'}
              name={'name'}
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name:e.target.value})}
              variant='outline'
          />  
          <Input 
            placeholder={'Price'}
            name={'price'}
            type={'number'}
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, price:e.target.value})}
            variant='outline'
          />  
          <Input 
          placeholder={'Image URL'}
          name={'image'}
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image:e.target.value})}
          variant='outline'
          />
          <Button colorScheme={'blue'} onClick={handleAddProduct} w='full'>
            Add Product
          </Button>
          </VStack>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage