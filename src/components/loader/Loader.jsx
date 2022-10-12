import React from "react";
import css from "./Loader.module.css"

function Loader(){
    return(
        <div className={css.wrapper}>
            <img 
            src="https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" 
            alt="loading" 
            />
        </div>
    )
}

export default Loader