import React from 'react';
import style from "./ItemList.module.css"
import Data from './../../Data/Data.json'
import { Navigate, useNavigate } from 'react-router';

const ItemList = () => {

    

    const navigate = useNavigate()
    return (
        <div>
             <ul>
             {Object.keys(Data).map((item)=>(
              <li key={Math.random()} onClick={()=>navigate(`pageItem/${item}`)}>{item}</li>
             ))}
           
        </ul>
        </div>
    );
};
export default ItemList;