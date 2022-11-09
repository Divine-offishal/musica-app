import React from "react";
import NavPage from "./basic-resourses/navpage";
import Navbar from "./navbar";
import Page1 from "./page1/page1";
import Controls from "./controls";
import SideBar from "./page1/components/sidebar";

export default function MainPage (){

    return (
        <>
            <Navbar/>
            <div className="d-md-flex ">
                <span className="d-md-block d-none"><SideBar/></span>
                <NavPage/>
            </div>
            <Controls/>
        </>
    )
}