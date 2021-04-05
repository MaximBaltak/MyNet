import stylse from './NavBar.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className={stylse.nav}>
            <div className={stylse.item}><NavLink to='/profile' activeClassName={`${stylse.active}`}>Профиль</NavLink></div>
            <div className={stylse.item}><NavLink to="/massages"activeClassName={`${stylse.active}`} >Сообщение</NavLink></div>
            <div className={stylse.item}><NavLink to="/friends"activeClassName={`${stylse.active}`} >Друзья</NavLink></div>
            <div className={stylse.item}><NavLink to="/news" activeClassName={`${stylse.active}`}>Новости </NavLink></div>
            <div className={stylse.item}><NavLink to="/music" activeClassName={`${stylse.active}`}>Музыка</NavLink></div>
            <div className={stylse.item}><NavLink to="/settings">Настройки</NavLink></div>   
        </nav>
    )
}
export default NavBar;