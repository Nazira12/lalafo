import React from "react";
import css from "./Header.module.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className={css.wrapper}>
            <Link to="/" className={css.logo}>LOGO</Link>
            <div className={css.links}>
                <Link to="/about">О нас</Link>
                <Link to="/contacts">Контакты</Link>
                <Link to="/login">Войти</Link>
            </div>
        </header>
    )
}

export default Header;