import { useState } from "react";
import ResList from "./ResList";


const Ratings = () => {
    const[restuarants,setRestuarant]=useState([
        {name:'KFC' ,
        location: 'Jadria',
        rate:5,
        id:1},
        {name:'Lees' ,
        location: 'Jadria',
        rate:4,
        id:2}
    ])

      const addRestuarant=(name)=>{
        const newRes=[...restuarants,{name}];
        setRestuarant(newRes)

      }
      const handleDelete=(id)=>{
        const newRes=restuarants.filter(item=>item.id !== id);
        setRestuarant(newRes);

      }
      
      const handleName=(e) => {
        setRestuarant({...restuarants, name:e.target.value})

      }
      const handleLocation=(e) => {
        setRestuarant({...restuarants, location:e.target.value})
      }
      const handleRate=(e) => {
        setRestuarant({...restuarants, rate:e.target.value})
      }
      

      
  return (
    <div>
     <ResList carrier={restuarants} title="The Restuaranr List" handleDelete={handleDelete}/>
     
      <input name='name' value={restuarants.name} onChange={handleName}/>
      <input name='location' value={restuarants.location} onChange={handleLocation}/>
      <input name='rate' value={restuarants.rate} onChange={handleRate}/>
      <button onSubmit={()=>addRestuarant}>Submit</button>
      
    </div>
  )
}

export default Ratings