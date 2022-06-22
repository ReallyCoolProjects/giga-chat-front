import { Box, Drawer } from '@mui/material'
import React from 'react'
import SideDrawer from './SideDrawer'

const LeftDrawer = (props:any) => {
  const {drawerWidth,container,mobileOpen,handleDrawerToggle} = props
  return (
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor:"black" }}
    aria-label="mailbox folders"
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        backgroundColor:"black"
      }}
    >
      <SideDrawer/>
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      <SideDrawer/>
    </Drawer>
  </Box>
  )
}

export default LeftDrawer