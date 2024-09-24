import React, { useState } from 'react';
import style from './/ItemPage.module.css'
import { useParams } from 'react-router';
import Data from '..//../Data/Data.json'
import Barcode from 'react-barcode';


const ItemPage = () => {

    const { nameCategory } = useParams()
    const { name } = useParams()
    const [volume, setVolume] = useState()
    console.log(name)
    
    Data[nameCategory].map((item)=>{
        if(item.Name === name){
            console.log(item.Barcode)
            console.log(item.Volume)
            // setVolume(item.Volume)
        }
    })


    return (
        <div>
            {Data[nameCategory].map((item)=>{
                  if(item.Name === name){
                    return  (
                    <h1> {item.Name + " " + item.Volume + "л"}</h1>
            )}
            })}
            <div className={style.Barcode}>

                {Data[nameCategory].map((item)=>{
                    if(item.Name === name){
                        return  (
                        <div key={Math.random()}>
                            <Barcode renderer='svg' 
                            fontSize={40} 
                            width={3.3} 
                            height={200} 
                            value={item.Barcode} format='CODE128'/>
                        </div>
                )}
                })}
                </div>
            <div className={style.photo}></div>

        </div>
    );
};

export default ItemPage;