import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import NavMenuItem from './nav_menu/NavMenuItem'
import CollapseMenu from './CollapseMenu'
// import classes from './Layout.module.css'
// import MyButton from '../MyButton/MyButton'
// import { AuthContext } from '../../context/context'
// import { useCart } from 'react-use-cart'
// import { useContext } from 'react';
const Layout = () => {

    const options = ['белоконская 1', 'б. московская 2', 'верхняя дуброва 3'];

    return (
        <div>
            <div>
                <h2>Logo_togo</h2>
                <NavMenuItem icon={'resources/logo.png'} text={'Писюн Горшков'} classNamer={"icon"} />
                <CollapseMenu options={options} text={'Выбрать точку >'} />
                <NavMenuItem icon={'./icon.jpg'} text={'Меню'} />
                <NavMenuItem icon={'./icon.jpg'} text={'Заказы'} />
                <NavMenuItem icon={'./icon.jpg'} text={'Система лояльности'} />
                <NavMenuItem icon={'./icon.jpg'} text={'Сотрудники'} />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout