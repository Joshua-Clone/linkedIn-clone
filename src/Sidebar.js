import React from 'react'; 
import "./Sidebar.css"; 
import { Avatar } from "@material-ui/core"; 
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux' 

function Sidebar () { 
    const user = useSelector(selectUser); 

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{ topic }</p>
        </div>
    ); 

    return ( 
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="wet" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div> 

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="sidebar__statNumber">4,539</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post </p>
                    <p className="sidebar__statNumber">2,574</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("programming")}
                {recentItem("JavaScript")}
                {recentItem("Redux")}
                {recentItem("Coder")}
            </div>
            
        </div>
    )
}

export default Sidebar 