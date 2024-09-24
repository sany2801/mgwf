import React, { useEffect, useState } from 'react';
import style from "./FindInput.module.css"
import Data from "./../../Data/Data.json"
import { useNavigate } from 'react-router';

const FindInput = () => {

    const navigate = useNavigate()

    const [ListCategory, setList] = useState(Object.keys(Data))
    const [listName, setFindRes]= useState([])
    const [value, setValue] = useState("")
    const [listFindName, setListFindName]= useState()




const CleaarInput =()=>{
    setValue("")
    navigate("/mgwf")
}

const Finde = ()=>{
    localStorage.setItem("listFind", JSON.stringify(listName))
    navigate("findlist")
    
}

    

    const FindChange =(e)=>{
        const result = []
        setValue(e.target.value)

        const ListValue = e.target.value.trim().split(" ")
         console.log(ListValue)
        for(const key in Data){
            Data[key].map((item)=>{
                if((item.Name.toLowerCase().trim().includes(e.target.value.toLowerCase()))){
                    result.push({item : item, category: key})
                }
             
            })
            setFindRes(result)
        }
        
    }

    return (
        <div className={style.wrapper}>
           <div>
                <input type='text' placeholder='ПОИСК' value={value} onChange={(e)=>FindChange(e)}></input>
                <button className={style.btnClear} onClick={()=>CleaarInput()}> x</button>
            </div> 
                <button  className={style.btnFind} onClick={()=>Finde()}> найти</button>
        </div>
    );
};

export default FindInput;