import React from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from "@mui/material/styles"
import { Box, Stack } from "@mui/material";

import Color from './components/Color'

function App () {
  return (
    <ThemeProvider theme={Color}>
      <Box>
        <CssBaseline />
        <TopNav/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Main/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;