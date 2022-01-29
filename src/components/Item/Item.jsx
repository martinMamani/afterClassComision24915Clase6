import React from 'react';
import './item.css'
{/* segundo Ejemplo haciendo una consulta a una api*/}
// const Item = ({user}) => {
const Item = ({movie}) => {
  return (
  <div className='item-wrap'>
    <img src={movie.imgUrl} alt={movie.title} />
    <p>{movie.title}</p>
    <p>{movie.price}</p>
    {/* segundo Ejemplo haciendo una consulta a una api*/}
    {/* <p>{user.name}</p>
    <p> {user.username}</p> */}
  </div>
  )
};

export default Item;