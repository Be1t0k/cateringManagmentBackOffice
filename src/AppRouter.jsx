import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/context';
import NavMenu from './components/nav_menu/NavMenu';
import { privateRoutes, publicRoutes } from './utils/routes';
import Layout from './components/Layout';
const AppRouter = () => {
    const { isAuth, isSending } = true;
    //useContext(AuthContext);

    if (isSending) {
        return <h1 style={{ textAlign: 'center' }}>Подождите, список загружается!</h1>
    }
    return (
        <Routes>
            <Route path='/' element={<Layout />}>

                {/* {isAuth
                    ? privateRoutes.concat(publicRoutes).map(({ name, path }) => (
                        <Route key={name} path={path} Component={name} />
                    ))
                    : publicRoutes.map(({ name, path }) => (
                        <Route key={name} path={path} Component={name} red />
                    ))
                } */}

                {
                   publicRoutes.map(({ name, path }) => (
                        <Route key={name} path={path} Component={name} />
                    ))
                }
            </Route>
        </Routes>
    )
}

export default AppRouter