import React from 'react'
import './SideBarRow.css'
import { Avatar } from '@mui/material'



function SideBarRow({src, Icon, title}) {
    
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h5>{title}</h5>
        </div>
    )
}



export default SideBarRow
