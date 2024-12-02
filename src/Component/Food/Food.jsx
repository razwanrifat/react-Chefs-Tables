import React from 'react';

const Food = ({FoodsProp,handleWantCook}) => {
    const{id,price,img,name,time_duration,ingredients,calories}=FoodsProp;
    return (
        <div>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl my-2">
                    <figure>
                        <img className='w-50'
                        src={img}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">{calories}Cal.</div>
                        <div className="badge badge-outline">{price}Tk</div>
                        </div>

                        <button onClick={()=>handleWantCook(FoodsProp)} className="btn btn-accent">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;