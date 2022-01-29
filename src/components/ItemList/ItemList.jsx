import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"
{/* segundo Ejemplo haciendo una consulta a una api*/}

// const ItemList = ({users}) => {  
const ItemList = ({movies}) => {
  return (<div className='itemList-wrap'>
  {
    movies.map((movie)=>(
      <Item key={movie.id} movie={movie}></Item>
      // segundo Ejemplo haciendo una consulta a una api
        // users.map((user)=>(
        //   <Item key={user.id} user={user}></Item>
        ))
      }
  </div>
  )
}

export default ItemList;
