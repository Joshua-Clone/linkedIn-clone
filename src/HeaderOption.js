import React from "react"; 
import "./HeaderOption.css"; 
import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
//  Avatar can pass in the same properties as a img "https://material-ui.com/components/avatars/"



function HeaderOption({ avatar, Icon, title, onClick }) { 
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOption">
            { Icon && <Icon className="headerOption__icon" />}
            { avatar && (
            <Avatar className="headerOption__icon" alt="Profile Picture">{user?.email[0]}
            </Avatar>
            )}
            <h3 className="headerOption__title">{ title }</h3>
        </div>
    )
}

export default HeaderOption 