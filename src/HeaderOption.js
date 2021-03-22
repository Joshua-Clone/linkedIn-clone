import React from "react"; 
import "./HeaderOption.css"; 
import { Avatar } from "@material-ui/core"
//  Avatar can pass in the same properties as a img "https://material-ui.com/components/avatars/"



function HeaderOption({ avatar, Icon, title }) { 
    return (
        <div className="headerOption">
            { Icon && <Icon className="headerOption__icon" />}
            { avatar && <Avatar className="headerOption__icon" src={avatar} alt="Profile Picture" />}
            <h3 className="headerOption__title">{ title }</h3>
        </div>
    )
}

export default HeaderOption 