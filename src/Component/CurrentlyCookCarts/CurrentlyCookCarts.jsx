import React from 'react';
import CurrentyCookCart from '../CurrentlyCookCart/CurrentyCookCart';

const CurrentlyCookCarts = ({currentlyCooks,totalWaitingTime,TotalPrice}) => {
    return (
        <div className='border-2 rounded-lg m-2 p-2'>
            <h1 className='text-3xl font-bold'>Currently cook : {currentlyCooks.length}</h1>
            {
                currentlyCooks.map(crntCook=><CurrentyCookCart key={crntCook.id} currentlyCooks={crntCook}></CurrentyCookCart>)
            }

            <hr />
            <div className='border-2 rounded-lg m-2 p-2'>
                <h1>Total Waiting Time: {totalWaitingTime} min.</h1>
                <h1>Total Price: {TotalPrice} Tk.</h1>
            </div>
        </div>
    );
};

export default CurrentlyCookCarts;