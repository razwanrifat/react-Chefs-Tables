import React from 'react';

const WantCookCart = ({wantCook,handlePreparingButton}) => {
    const{name,calories,img,price,time_duration}=wantCook;
    return (
        <div>
            {/* <h1>{name} <button  onClick={()=>handlePreparingButton(wantCook)} className="btn btn-accent btn-xs my-1">Preparing</button></h1> */}


<div className="overflow-x-auto">
  <table className="table">
    
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>{name}</td>
        <td>{price} Tk.</td>
        <td>{time_duration} min.</td>
        <td> <button  onClick={()=>handlePreparingButton(wantCook)} className="btn btn-accent btn-xs my-1">Click for Preparing</button></td>
      </tr>
      
    </tbody>
  </table>
</div>


        </div>
    );
};

export default WantCookCart;