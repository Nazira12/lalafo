import React from "react";
import css from "./Title.module.css"

function Title(props){
    return(
        <div className={css.text + " " + props.position}>{props.children}</div>
    )
}

export default Title