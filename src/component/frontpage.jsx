import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled} from '@mui/material/styles';

import Ast from './ast'
import Formula from './formula'


// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));


export default function Frontpage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    // <div style={{ height: 1000, width: '100%' }}>
    <div style={{  height: '100%', width: '100%' }}>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Scientific Calculator of Formula Visualization 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Visualization of Formula " value="1" />
              <Tab label="Visualization of Abstract Syntax Tree" value="2" />
            </TabList>
          </Box>

            <TabPanel value="1" style={{width: '100%', height: 1000}}>
                <div class='page-wrapper'>
                    <Formula />
                </div>            
            </TabPanel> 
            
            <TabPanel value="2" style={{width: '100%', height: 1000}}> 
                <div class='page-wrapper'>
                    <Ast />
                </div>
            </TabPanel>

        </TabContext>
      </Box>
    </div>
  );
}
