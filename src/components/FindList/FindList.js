import React from 'react';
import { useNavigate } from 'react-router';

const FindList = () => {

console.log(JSON.parse(localStorage.getItem("listFind")))
const navigate = useNavigate()


    return (
        <div>
             <ul>
             {JSON.parse(localStorage.getItem("listFind")).map((item)=>(
              <li key={Math.random()} onClick={()=>navigate(`/mgwf/pageItem/${item.category}/${item.item.Name}`)}>{item.item.Name + " " + item.item.Volume + "л"}</li>
             ))}
           
        </ul>
        </div>
    );
};

export default FindList;