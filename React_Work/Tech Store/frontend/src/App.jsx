import React from 'react';
import { Box } from '@chakra-ui/react';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage.jsx';
import { Navbar } from './components/Navbar';
import { Routes, Route } from'react-router-dom';
import { useColorModeValue } from './components/ui/color-mode';
function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue('gray.300','gray.800')}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/create' element={<CreatePage/>}/>
        </Routes>
    </Box>
  )
}

export default App
