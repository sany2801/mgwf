import React from 'react';
import Data from '..//../Data/Data.json'
import { useNavigate, useParams } from 'react-router';

const ListCategory = () => {
    const navigate = useNavigate()
    const { nameCategory } = useParams()
    console.log(Data[nameCategory])

    return (
        <div>
            <h1>{nameCategory}</h1>
            <ul>
                {Data[nameCategory].map((item)=>(
                    <li key={Math.random()} onClick={()=>navigate(item.Name)}>{`${item.Name} ${item.Volume} л`}
                     </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default ListCategory;