import React from 'react'

import MainHeader from './MainHeader'
import Carousel from '../Carousel/Carousel'

import { Box, Container } from '@mui/material'

const Main = () => {
  return (
    <Box 
      flex={10}
      paddingTop={5}
    >
      <Container  maxWidth="xl">
        <MainHeader/>
        <Carousel/>
      </Container>
    </Box>
  )
}

export default Main