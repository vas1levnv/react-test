import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path}
                           element={<route.component/>}
                           to={route.path}
                           path={route.path}
                    />
                )}
                <Route path='/error' element={<Error/>}/>
                <Route path='/login' element={<Navigate to='/posts' replace/>}/>
                <Route path='/*' element={<Navigate to='/error' replace/>}/>
            </Routes>
            :
            <Routes>
                {
                    publicRoutes.map(route =>
                        <Route key={route.path}
                               element={<route.component/>}
                               to={route.path}
                               path={route.path}
                        />
                    )
                }
                <Route path='/*' element={<Navigate to='/login' replace/>}/>
            </Routes>


    );
};

export default AppRouter;