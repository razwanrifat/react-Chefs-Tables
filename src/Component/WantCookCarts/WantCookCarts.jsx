import React from 'react';
import WantCookCart from '../WantCookcart/WantCookCart';

const WantCookCarts = ({wantCook,handlePreparingButton}) => {
    return (
        <div className='border-2 rounded-lg m-2 p-2'>
            <h1 className='text-3xl font-bold'>Want to cook : {wantCook.length} Items.</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Price</th>
                        <th>Time Duration</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    
                    </tbody>
                </table>
            </div>



            <hr />
            {
                wantCook.map(wtcok=><WantCookCart key={wtcok.id} wantCook={wtcok} handlePreparingButton={handlePreparingButton}></WantCookCart>)
            }
        </div>
    );
};

export default WantCookCarts;