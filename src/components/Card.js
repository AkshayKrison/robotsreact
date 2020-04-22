import React from 'react';

const Card = ({name, spec, id}) => {
    return(
<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='akshay' src={`https://robohash.org/${ id }AkshayKrison?200x200` } />
        <div>
            <h2>{ name }</h2>
            <p>{ spec }</p>
        </div>

</div>
    
    )} 

export default Card;