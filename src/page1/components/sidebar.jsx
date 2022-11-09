import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home} from "../../images/svgs/Home.svg"
import { ReactComponent as Playlist} from "../../images/svgs/playlist.svg"
import { ReactComponent as Radio} from "../../images/svgs/radio.svg"
import { ReactComponent as Video} from "../../images/svgs/videos.svg"
import { ReactComponent as Profile} from "../../images/svgs/profile.svg"
import { ReactComponent as Logout} from "../../images/svgs/logout.svg"

export default function SideBar (){

    return (
        <div className="sidebar pt-4">
            <div className="d-flex flex-column sidetab-1 p-2 ml-2">
                <NavLink to="/" className={({isActive}) => {
                    return isActive ? "navlink-icon active py-2" : "navlink-icon py-2"
                }} end>
                    <span><Home/></span>
                </NavLink>
                <NavLink to="/2" className={({isActive}) => {
                    return isActive ? "navlink-icon active py-1" : "navlink-icon py-1"
                }}>
                    <span><Playlist/></span>
                </NavLink>
                <NavLink to="/3" className={({isActive}) => {
                    return isActive ? "navlink-icon active py-1" : "navlink-icon py-1"
                }}>
                    <span><Radio/></span>
                    
                </NavLink>
                <NavLink to="/4" className={({isActive}) => {
                    return isActive ? "navlink-icon active py-1" : "navlink-icon py-1"
                }}>
                    <span><Video/></span>
                    
                </NavLink>
                {/* py-2 */}
            </div>
            
            <div className="d-flex flex-column sidetab-2 p-2 ml-2 mt-3">
                <NavLink to="/5" className={({isActive}) => {
                    return isActive ? "navlink-icon active py-2" : "navlink-icon py-2"
                }}>
                <span><Profile/></span>
                </NavLink>
                <NavLink to="/6" className={({isActive}) => {
                    return isActive ? "navlink-icon active py-2" : "navlink-icon py-2"
                }}>
                    <span><Logout/></span>
                </NavLink>
            </div>
            
        </div>
    )
}