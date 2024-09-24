import React from 'react';
import FindInput from '../../components/FindInput/FindInput';
import ItemList from '../../components/ItemList/ItemList';
import { Outlet } from 'react-router';
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.wrapper}> 
            <FindInput/>
            <Outlet/>
        </div>
    );
};

export default Home;