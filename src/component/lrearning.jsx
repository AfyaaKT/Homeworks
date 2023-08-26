import { useState } from "react";

function lrearning() {
const[counter,setounter]=useState(0)

    
  return (
    <div >
    
        <button onClick={()=>setounter((e)=>e-1)}>-</button>
         <h1>{counter}</h1>
         <button onClick={()=>setounter((e)=>e+1)}>+</button>

    </div>
  )


}
export default lrearning;