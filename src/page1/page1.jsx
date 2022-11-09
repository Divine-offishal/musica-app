import React from "react";
import { useState } from "react";
import IMAGES from "../images/images"
import NewReleases from "./components/new-releases";
import TopCharts from "./components/topCharts";
import Trending from "./components/trending";

export default function Page1 (){

    const [image, setImage] = React.useState(window.innerWidth > 1145)
    
    const windowResize = ()=>{
        setImage(window.innerWidth > 1145)
    }

    useState(()=>{

        window.addEventListener('resize', windowResize)
        return () => window.removeEventListener('resize', windowResize)

    }, [])

    return(
        <div>
            <div className="d-md-flex">
                {image? <img src={IMAGES.heroImage} className="pt-3 pl-2"/> : <img src={IMAGES.heroImageB} className="img-fluid p-3"/>}
                <TopCharts/>
            </div>
            <NewReleases/>
            <Trending/>
        </div>
    ) 
}