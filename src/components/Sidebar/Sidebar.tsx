import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className='flex flex-col flex-[0.25] h-screen bg-neutral-900'>
      <h2>this is demo</h2>
      <div className="sidebar_top flex items-center p-[20px] bg-neutral-900 text-white justify-between">
        <h3>Clever programmer</h3>
        <ExpandMoreIcon/>
      </div>
      <div className="sidebar_channels">
        
      </div>
    </div>
  )
}

export default Sidebar