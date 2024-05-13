import React, { useContext } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { forwardRef } from 'react'
import { personsImgs } from '../../utils/images';
import { AuthContext } from '../../context';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Dropdown() {

    const navigate = useNavigate();
    const { setIsAuth } = useContext(AuthContext);
    const client_data = JSON.parse(localStorage?.getItem('client_data'));

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        localStorage.removeItem('client_data');
        navigate("/login");
    }

    let MyCustomButton = forwardRef(function (props, ref) {
        return (
            <div className="user-info" ref={ref} {...props}>
                <div className="info-img img-fit-cover">
                    <img src={personsImgs.person_two} alt="profile image" />
                </div>
                <span className="info-name">{client_data.phone}</span>
            </div>
        )
    })

    return (
        <Disclosure as="div">
            <DisclosureButton as={MyCustomButton}>Аккаунт</DisclosureButton>
            <DisclosurePanel>
                {client_data ?
                    <NavLink to={'account'} className='nav-link'><p>О себе</p></NavLink>
                    : null}
                <button className='nav-link' onClick={logout}><p>Выйти</p></button>
            </DisclosurePanel>
        </Disclosure>
    );
}