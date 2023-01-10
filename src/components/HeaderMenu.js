import React from "react";
import { useAuth } from "../hook/useAuth";
import './style/HeaderMenu.css';
export const HeaderMenu = ({userName}) => {
    const {user} = useAuth()
    return(
        <div className="header_block">
            <div className="ico_text_block">
                <h1>RoboHamster</h1>
            </div>
            <div className="header_btn">
                {
                    user ?
                    <p>{userName}</p> 
                    : ""
                }
               
            </div>
        </div>
           
        
)};



export default HeaderMenu;


