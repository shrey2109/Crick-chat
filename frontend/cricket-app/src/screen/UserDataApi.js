
import React, { useEffect, useState } from "react";
import axios from 'axios';

const UserDataApi = async () => {
//   const [num, setNum] = useState();
//   const [name, setName] = useState();
//   const [moves, setMoves] = useState();
  const {data} = await axios.post('localhost:3000/api/users/signup', {
    email:,
    password:,
    name:,
    gender:,
    age:,
  })
//   useEffect(() => {
//     async function getData(){
//       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//       console.log(res);
    
//       setName(res.data.name);
//       setMoves(res.data.moves.length);
//     }
//     getData();
//   })

  return(
    <>
      {/* <h1> YOU SELECTED : {num} </h1>
      <h1> Pokemon Name : {name} </h1>
      <h1> Pokemon Moves : {moves} </h1>
      <select value={num} onChange={(event) =>{
        setNum(event.target.value);
      }}>
        <option value='1'> 1 </option>
        <option value='3'> 3 </option>
        <option value='4'> 4 </option>
        <option value='5'> 5 </option>
        <option value='25'> 25 </option>
      </select> */}
    </>
  )
}
export default UserDataApi;