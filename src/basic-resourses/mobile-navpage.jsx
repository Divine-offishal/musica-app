import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home} from "../images/svgs/Home.svg"
import { ReactComponent as Playlist} from "../images/svgs/playlist.svg"
import { ReactComponent as Radio} from "../images/svgs/radio.svg"
import { ReactComponent as Video} from "../images/svgs/videos.svg"
import { ReactComponent as Profile} from "../images/svgs/profile.svg"
import { ReactComponent as Logout} from "../images/svgs/logout.svg"

export default function MobileRoute (){

    return (
        <>
            <NavLink to="/" className="d-flex text-decoration-none p-3">
                    <span className="pt-3 h1"><Home/></span>
                    <h1 className="pl-2 pt-3 text-white">Home</h1>
            </NavLink>
            <NavLink to="/2" className="d-flex text-decoration-none p-3">
                <span className="pt-3 h1"><Playlist/></span>
                <h1 className="pl-2 pt-3 text-white">My collection</h1>
            </NavLink>
            <NavLink to="/3" className="d-flex text-decoration-none p-3">
                <span className="pt-3 h1"><Radio/></span>
                <h1 className="pl-2 pt-3 text-white">Radio</h1>
            </NavLink>
            <NavLink to="/4" className="d-flex text-decoration-none p-3">
                <span className="pt-3 h1"><Video/></span>
                <h1 className="pl-2 pt-3 text-white">Music videos</h1>
            </NavLink>
            <NavLink to="/5" className="d-flex text-decoration-none p-3">
                <span className="pt-3 h1"><Profile/></span>
                <h1 className="pl-2 pt-3 text-white">Profile</h1>
            </NavLink>
            <NavLink to="/6" className="d-flex text-decoration-none p-3">
                <span className="pl-2 pt-3 h1"><Logout/></span>
                <h1 className="pl-2 pt-3 text-white">Logout</h1>
            </NavLink>
        </>
    )
}