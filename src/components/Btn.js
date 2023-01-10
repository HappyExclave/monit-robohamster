import React from "react";
import { Link } from "react-router-dom";
import './style/btn.css';
export const Btn = ({link,nameForm}) => {
    return(
        <div className="btn_menu">
            <Link to={link}>{nameForm}</Link>
        </div>
)};



export default Btn;