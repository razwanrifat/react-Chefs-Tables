import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = ({handleWantCook}) => {

const[Foods,setFoods]=useState([])

useEffect(()=>{
    fetch('Foods.json')
      .then(response => response.json())
      .then(data => setFoods(data))
},[])
console.log(Foods);

    return (
        <div >
            <h1>Available Item :{Foods.length} </h1>
            <div className='md:grid gap-2 grid-cols-2 '> 
                {
                    Foods.map(fds=><Food key={fds.id} FoodsProp={fds} handleWantCook={handleWantCook}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;