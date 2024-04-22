import React, { useState } from 'react'
import NavMenuItem from './NavMenuItem'
import NavMenu_select from './NavMenu_select'

function NavMenu() {
    const [limit, setLimit] = useState(10);

    return (
        <div className='NavMenu'>
            <h2>Logo_togo</h2>
            <NavMenuItem icon={'./icon.jpg'} text={'писюн горшков'}/>
            <NavMenu_select
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                    {value: 5, name: 'Точка 1'},
                    {value: 10, name: 'Точка 2'},
                    {value: 25, name: 'Точка 3'},
                    {value: -1, name: 'Добавить точку'},
                ]}
            />
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
            <NavMenuItem icon={'./icon.jpg'} text={'navmenu_item'}/>
        </div>
    )
}

export default NavMenu