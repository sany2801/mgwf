import React, { useState } from 'react';
import FindInput from '../../components/FindInput/FindInput';
import ItemList from '../../components/ItemList/ItemList';
import { Outlet } from 'react-router';
import style from './Home.module.css'
import BarcodeScanner from '../../components/BarcodeScanner/BarcodeScanner';

const Home = () => {

     

    return (
        <div className={style.wrapper}> 
            <FindInput/>
            {/* <BarcodeScanner/> */}
            <Outlet/>
        </div>
    );
};

export default Home;