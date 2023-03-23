import React from 'react';
import Greeting from "./Greeting";

const HomePage = () => {
    return (
        <div>
            <div>Главная</div>
            <Greeting name={'Test'}/>
        </div>
    );
};

export default HomePage;