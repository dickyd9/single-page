import React from 'react'

import { AppBar, Toolbar, IconButton, styled, Avatar } from '@mui/material'
import { Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const TopNav = () => {
  return (
    <AppBar position="static" style={{ background: '#ffffff' }}>
      <StyledToolbar>
        <Typography gutterBottom variant="h5" component="div" style={{ color: '#000000' }}>Gadjian</Typography>
        
        <IconButton
          sx={{ display: { xs: "none", sm: "block" }}}
        >
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
        </IconButton>
      </StyledToolbar>
    </AppBar>
  )
}

export default TopNav