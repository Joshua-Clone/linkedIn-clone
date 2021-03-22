import React from 'react'; 
import './Header.css'; 
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'; 
import HomeIcon from '@material-ui/icons/Home'; 
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"; 
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"; 
import ChatIcon from "@material-ui/icons/Chat"; 
import NotificationIcon from "@material-ui/icons/Notifications"; 

function Header() { 
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="LinkedIn Logo" />

                <div className="header__search"> 
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" /> 
                <HeaderOption Icon={ChatIcon} title="Messaging" /> 
                <HeaderOption Icon={NotificationIcon} title="Notifications" />
                <HeaderOption 
                avatar="https://media-exp1.licdn.com/dms/image/C5603AQHehuvqajccIA/profile-displayphoto-shrink_100_100/0/1614751167207?e=1622073600&v=beta&t=ezEdQ_MWy91Am3SZ2GzQwdxuEOQr3MMl-hsknZwk7g4" 
                title="Me"/>
            </div>
        </div>
    )
}

export default Header

// Notes: 

// Install Material UI - "npm install @material-ui/core" from "material-ui.com"
// Install Material UI icons - "npm install @material-ui/icons" and search for icons "https://material-ui.com/components/material-icons/"