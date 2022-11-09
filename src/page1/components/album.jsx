import React from "react";
import IMAGES from "../../images/images";
import NewData from "./new-Data";

export default function Album(){

    return (
        <div className="album-page">
            <div className="d-md-flex">
                <img src={IMAGES.leadImage} className="img-fluid album-image"/>
                <div  className="p-3">
                    <h1>Tomorrow's tunes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi mollitia asperiores nam sunt officia natus.</p>
                    <button className="btn btn1 p-2 ml-2">Play all</button>
                    <button className="btn btn1 p-2 ml-3">Add to collection</button>
                    <button className="btn btn1 p-2 ml-3">Like</button>
                </div>
            </div>
            {/* mapping through Newdara to display the music info */}
            {NewData.map((item, index) => {
                return (
                    <div className="d-flex albums m-3 rounded" key={index}>
                        <div className="d-flex p-2">
                            <img src={item.cover} className="album--subimages"/>
                            <h5 className="pl-2">{item.title} - {item.artist}</h5>
                        </div>
                        <div className="pl-5 pt-2 extra-padding">
                            <p>{item.duration}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}