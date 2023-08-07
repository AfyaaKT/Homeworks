import React from 'react'

const ResList = (props) => {
    const restuarants=props.carrier;
    const heading=props.title;
    const handleDelete=props.handleDelete;
  return (
    <div>
        <h1>{heading}</h1>
         {restuarants.map((item) => (
        <div key={item.id} className="res">
          <h1>{item.name}</h1>
        <p>{item.location}</p>
        <p>{item.rate}</p>  
        <button onClick={()=>handleDelete(item.id)} >Delet Restuarant</button>
    
        </div>

      ))};
    </div>
  )
}

export default ResList;
