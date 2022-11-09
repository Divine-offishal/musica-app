import React from "react";
import { NavLink } from "react-router-dom";
import TopData from "./top-data";
import { ReactComponent as Like} from "../../images/svgs/Like.svg"

export default function TopCharts(){

    return (
        <div>
            <h1 className="p-3 d-block">Top charts</h1>
            <div className="d-flex topCharts-main pl-4">
                {TopData.map((item, index) => {
                    return (
                            <div className="topItems-cont pt-3 mr-3 d-flex" key={index}>
                                <div className="d-md-flex">
                                    <NavLink to="/album">
                                        <img src={item.cover} className="top--images"/>
                                    </NavLink>
                                    <div className="d-md-flex flex-column album-info-cont">
                                        <h3 className="album-info">{item.title}</h3>
                                        <p className="album-info1">{item.artist}</p>
                                        <p className="album-info1">{item.duration}</p>
                                    </div>
                                </div>
                            <div className="like text-center"><Like className="mt-2"/></div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}