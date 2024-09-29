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
            console.log(item.images)
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
                            fontSize={20} 
                            width={1.2} 
                            height={100} 
                            value={item.Barcode} 
                            format='CODE128'/>
                        </div>
                )}
                })}
                </div>

                {Data[nameCategory].map((item)=>{
                  if(item.Name === name){
                    return  (
                        <div className={style.photo}>
                        <img src={`${item.images}`} alt={item.Name} />
                   </div>
                )}
                })}
               

        </div>
    );
};

export default ItemPage;