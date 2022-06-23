import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SideDrawer = () => {
  return (
    <div className="sidedrawer">
    <Typography variant="h3" sx={{
      textAlign: 'center'
    }}>Messages</Typography>
    <List>
      {['CJ', 'Anthony', 'Samantha', 'Dan'].map((text, index) => (
         <ListItemButton>
        <ListItem key={text}>
            <ListItemIcon>
             {/* icons for items go here */}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
          </ListItemButton>
      ))}
    </List>
  
  </div>
  )
}

export default SideDrawer