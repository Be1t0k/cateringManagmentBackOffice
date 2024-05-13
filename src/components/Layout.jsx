import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavMenuItem from './nav_menu/NavMenuItem'
import CollapseMenu from './CollapseMenu'
import NavMenu from './nav_menu/NavMenu'
// import classes from './Layout.module.css'
// import MyButton from '../MyButton/MyButton'
// import { AuthContext } from '../../context/context'
// import { useCart } from 'react-use-cart'
// import { useContext } from 'react';
const Layout = () => {

    const options = ['белоконская 1', 'б. московская 2', 'верхняя дуброва 3'];

    return (
        <div className='layout'>
            <NavMenu />
            <div className='main'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout