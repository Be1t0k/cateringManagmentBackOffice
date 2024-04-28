import React from 'react'
import NavMenuItem from './NavMenuItem'
import CollapseMenu from '../CollapseMenu';

function NavMenu() {

    const options = ['белоконская 1', 'б. московская 2', 'верхняя дуброва 3'];

    return (
        <div className='NavMenu'>
            <h2>Logo_togo</h2>
            <NavMenuItem icon={'resources/logo.png'} text={'Писюн Горшков'} classNamer={"icon"}/>
            <CollapseMenu options={options} text={'Выбрать точку >'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'Меню'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'Заказы'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'Система лояльности'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'Сотрудники'}/>
        </div>
    )
}

export default NavMenu