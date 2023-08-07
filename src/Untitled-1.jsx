 // function Restuarant({restuarant , index , removeRes }){
  //   return(
  //     <div>
  //       <h1>{restuarant}</h1>
  //       <button onClick={removeRes}>Remove</button>
    
  //     </div>
  //   );
  //   };
  
  // const addRestuarant=(name)=>{
  // import { useState } from "react";
// import Words from "./Quats";
  //   const newRes=[...restuarants,{name}];
  //   setRestuarant(newRes)

  // }
  // const removeRes=index=> {
  //   const newRes=[...restuarants];
  //   newRes.splice(index,1)
  //   setRestuarant(newRes)

  // }
  const[quats, setQuats]=useState([
    'kkkkkkkkkkkkkk',
    'jjjjjjjjjjjjjj',
    'hhhhhhhhhhhhhhhhh',
    'gggggggggggggg'
    
])
// const [index,setIndex]=useState("")

function showQuat(){
setQuats(quats)}
     {/* <Words quat={showQuat} arr={["kkkkkkk","llllllll","jjjj"]}/> */}
