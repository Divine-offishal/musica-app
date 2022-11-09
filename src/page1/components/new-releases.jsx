import React from "react";
import NewData from "./new-Data";

export default function NewReleases (){

    return (
        <>
        <h2>New releases</h2>
        <div className="d-flex newRel-cont">
            {NewData.map((item, index)=> {
                return (
                    <div className="p-3" key={index}>
                        <img src={item.cover} className="newRel--img"/>
                        <h3>{item.title}</h3>
                        <h5>{item.artist}</h5>
                        <p>{item.duration}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}