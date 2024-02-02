import React from "react";
export function Popup(props){
    return(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">close</button>
                {props.Children}
            </div>
        </div>
    )
}