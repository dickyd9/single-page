import React from 'react'

import ButtonStyle from '../ButtonStyle';

import { Stack, Grid, Typography, TextField, InputAdornment } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};


const MainHeader = () => {
  return (
    <Box
        style={{ background: '#ffffff' }}
        spacing={2}
        display="flex"
        direction="column"
        justifyContent="space-between"
    >
      <Typography gutterBottom variant="h5" component="div" margin={1} style={{fontWeight: 'bold'}}>
          Personel List
          <Typography>
              List of all personels
          </Typography>
      </Typography>

      <Stack 
      spacing={2} 
      paddingRight={2}
      display="flex"
      direction="row"
      xs={{ direction: {xs: "column", xl: "block"}}}
      >
        <Stack justifyContent="center">
          <IconTextField
            iconStart={<SearchIcon/>}
            placeHolder="Search"
          />
        </Stack>

        <Stack justifyContent="center">
          <ButtonStyle>Add Personel</ButtonStyle>
        </Stack>
      </Stack>
    </Box>
  )
}

export default MainHeader