import React, { useState ,useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import films from '../../utils/utils'
import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {

 const [movies, setMovies] = useState([]);
const [counter, setCounter] = useState(0);
//const [users, setUsers] = useState([]);
{/* segundo Ejemplo haciendo una consulta a una api*/}


useEffect(() => {
     const promiseMovies = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(films)
        },3000)
    })
    promiseMovies
    .then((res)=> {setMovies(res);
    })
    .catch((error)=>{
        console.log(error)
    })
    console.log(movies);
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(json => setUsers(json))
    // .catch((error)=>{
    //     console.log(error)
    // })
    {/* segundo Ejemplo haciendo una consulta a una api*/}
},[]);

function handleAddCounter () {
    setCounter(counter+1)
}
function handleRemoveCounter () {
    setCounter(counter-1)
}
  return (
  <div className='ilc-wrap'>
      <p>{counter}</p>
      <div className='btn'>
      <button onClick={handleAddCounter}> Add</button>
      <button onClick={handleRemoveCounter}> Remove</button>
      </div>
      <h2 className='greet'>{greeting}</h2>
      <ItemList movies={movies}></ItemList>
     {/* <ItemList users={users}></ItemList> */}{/* segundo Ejemplo haciendo una consulta a una api*/}
     
  </div>
  )
};

export default ItemListContainer;
