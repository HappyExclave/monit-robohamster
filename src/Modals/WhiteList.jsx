import React from "react";
import "./whiteList.css"

export const WhiteList = ({children}) => {
return(
    <div className="list">
        <div className="list__container">
            {children}
        </div>
    </div>
)
}


export default WhiteList;