import React from 'react'

import { Box } from '@mui/material'

import CardItem from '.././CardItem'

const Carousel = () => {
  return (
    <Box
      height={700}
      bgcolor="whitesmoke"
      marginTop={2}
    >
      <Box
        p={5}
        display="flex"
        direction="column"
        spacing={2}
      >
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>

      </Box>

    </Box>
  )
}

export default Carousel