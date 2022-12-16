import React from "react";
import {NavLink } from "react-router-dom"; 
import s from './AuthNav.module.css';

export default function AuthNav() {
    return(
        <div>
        <NavLink className={s.navLink} to='/register'>
            Регистрация
        </NavLink>

       <NavLink className={s.navLink}to='/login'>
            Логин
       </NavLink>
        </div>
    );
}