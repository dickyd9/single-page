import React from 'react';

import { Box } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Sidebar = () => {
  return (
    <Box
      bgcolor="white"
      height= {900}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", md: "block" }}}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon/>  
            </ListItemIcon>
            <ListItemText primary="Beranda" />  
          </ListItemButton>  
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <PeopleAltIcon/>  
            </ListItemIcon>
            <ListItemText primary="Personel List" />  
          </ListItemButton>  
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <CalendarMonthIcon/>  
            </ListItemIcon>
            <ListItemText primary="Daily Attendance" />  
          </ListItemButton>  
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;