import React from 'react';
import "./PageContainer.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from 'react-redux';
import {authRoutes, noAuthRoutes, publicRoutes} from '../../routes';
const PageContainer = () => {
    const isAuth = useSelector(state => state.app.isAuth)
    return (
        <div className="page-container">
            <Routes>
                {isAuth ? authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                ) : noAuthRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>)}

                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}

                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </div>
    );
};

export default PageContainer;