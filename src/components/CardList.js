import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

const cardComponent = robots.map((user, i) => {
   return <Card key={i} id={robots[i].id} name={robots[i].name}  spec={robots[i].spec}/>
})
    return(
       <div>
            {cardComponent}
       </div> 
       

)}
export default CardList;