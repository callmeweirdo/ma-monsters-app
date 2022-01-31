import React from 'react';
import './card.styles.css';
export const Card = (props) =>{
const {name, id, email} = props.monster;
    return(
          <div className='card-container'>
              <img src={`https://robohash.org/${id}?set=set2&size=150x150`} alt="monster" />
              <h2>{name}</h2>
              {email}
          </div>
    )
}