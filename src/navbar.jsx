import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from "./images/svgs/logo.svg"
import {ReactComponent as Menu} from "./images/svgs/menu (1).svg"
import {ReactComponent as Search} from "./images/svgs/menu-1.svg"

export default function Navbar (){

    return (
        <nav className="navbar">
            <div className="d-flex">
                <div>
                    <NavLink to="./mobile" className="toggler d-md-none"><Menu/></NavLink>
                </div>
                <span className="pl-3"><Logo/></span>
                <span className="d-md-block d-none pl-5 text-white"><input 
                    type="text"
                    placeholder="Search artist" className="text-white"/></span>
                <span className="search-btn d-md-none"><Search/></span>
            </div>
        </nav>
    )
}

