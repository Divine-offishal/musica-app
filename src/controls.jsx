import React from "react";
import { ReactComponent as Play} from "./images/svgs/Play.svg"
import { ReactComponent as Shuffle} from "./images/svgs/shuffle.svg"
import { ReactComponent as Previous} from "./images/svgs/previous.svg"
import { ReactComponent as Next} from "./images/svgs/next.svg"
import { ReactComponent as Repeat} from "./images/svgs/repeate-one.svg"
import { ReactComponent as Volume} from "./images/svgs/volume-high.svg"
import IMAGES from "./images/images";

export default function Controls(){

    return (
        <div className="control d-flex">
            <img src={IMAGES.image7} className="control--image p-2"/>
            <div>
                <h2>Music Name</h2>
                <p>Artist</p>
                <p>00:00</p>
            </div>
            <div className="d-flex pl-2 pt-3 control-btns">
                <div className="pt-1 px-4">
                    <Shuffle/>
                </div>
                <div className="pt-1 px-4">
                    <Previous/>
                </div>
                <div className="play-btn">
                    <Play/>
                </div>
                <div className="pt-1 px-4">
                    <Next/>
                </div>
                <div className="pt-1 px-4">
                    <Repeat/>
                </div>
            </div>
            <div className="pt-3 pl-5 ml-5">
                <Volume/>
            </div>
        </div>
    )
}