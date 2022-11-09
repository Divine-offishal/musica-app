import React from "react";
import { Route, Routes } from "react-router-dom";
// import Logout from "../logout/logout";
import Page2 from "../page2/page2";
import Page3 from "../page3/page3";
import Page4 from "../page4/page4";
// import Profile from "../profile/profile";
import Page1 from "../page1/page1";
import Album from "../page1/components/album"
// import Album2 from "../page1/album/album2";
// import Album3 from "../page1/album/album3";
import MobileRoutes from "../basic-resourses/mobile-navpage";


export default function NavPage(){

    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Page1/>}/>
                    <Route path="/2" element={<Page2/>}/>
                    <Route path="/3" element={<Page3/>}/>
                    <Route path="/4" element={<Page4/>}/>
                    {/* <Route path="/profile" element={<Profile/>}/>
                    <Route path="/logout" element={<Logout/>}/> */}
                    <Route path="/album" element={<Album/>}/>
                    {/* <Route path="/album2" element={<Album2/>}/>
                    <Route path="/album3" element={<Album3/>}/> */}
                    <Route path="/mobile" element={<MobileRoutes/>}/>
                </Routes>
            </section>
        </React.Fragment>
    )
}