import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material';


function HeaderOption({ avatar, Icon, title }) {
    return <div className="headerOption">
        {/* Only render when Icon is valid */}
        {avatar && <Avatar className="headerOption__icon" src={avatar} />}
        {Icon && <Icon className="headerOption__icon" />}
        <h3 className="headerOption__title">{title}</h3>
    </div>;
}


export default HeaderOption
