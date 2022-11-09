import React from "react";
import IMAGES from "../images/images";

export default function Page2(){

    return (

        <>
            <div className="pl-4 pt-2">
                <button className="btn btn-warning page2-btn mr-2">My collection</button>
                <button className="btn btn1 page2-btn">Likes</button>
            </div> 
            <div className="d-md-flex">
                <div className="image-div">
                    <img src={IMAGES.image2} className="page2-image p-2 ml-4"/>
                    <h1 className="image-text">Enemy</h1>
                    <p className="image-text2">Imagine Dragons</p>
                </div>
                <div className="image-div">
                    <img src={IMAGES.image5} className="page2-image p-2 ml-4"/>
                    <h1 className="image-text">Enemy</h1>
                    <p className="image-text2">Imagine Dragons</p>
                </div>
                <div className="image-div">
                    <img src={IMAGES.image7} className="page2-image p-2 ml-4"/>
                    <h1 className="image-text">Enemy</h1>
                    <p className="image-text2">Imagine Dragons</p>
                </div>
                
            </div>
        </>

    )
}