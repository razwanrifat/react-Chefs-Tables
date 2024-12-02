import React from 'react';

const CurrentyCookCart = ({currentlyCooks}) => {
    const{name,calories,img,price,time_duration}=currentlyCooks;
    return (
        <div>
            {/* <p>Name:{name} ; Price: {price};</p> */}
            <ul>
                <li>Name:{name} ; Time: {time_duration}; Price: {price};</li>
            </ul>

        </div>
    );
};

export default CurrentyCookCart;