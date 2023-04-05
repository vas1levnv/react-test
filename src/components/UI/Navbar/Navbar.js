import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            {isAuth
                ? <MyButton onClick={logout}>Выйти</MyButton>
                : <Link to={'/login'}>Войти</Link>}

            <div className="navbar__links">
                <Link to={'/'}>Главная</Link>
                <Link to={'/posts'}>Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;