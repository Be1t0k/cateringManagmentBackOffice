import React, { useState } from 'react'
import NavMenuItem from './NavMenuItem'
import CollapseMenu from './CollapseMenu';

function NavMenu() {
    const [limit, setLimit] = useState(10);
    const options = ['белоконская 1', 'б. московская 2', 'верхняя дуброва 3'];

    return (
        <div className='NavMenu'>
            <h2>Logo_togo</h2>
            <NavMenuItem icon={'resources/logo.png'} text={'писюн горшков'}/>
            <CollapseMenu options={options}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
        </div>
    )
}

export default NavMenu