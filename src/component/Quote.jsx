import React, {  useState } from 'react'

const ButtonComponent=({handleClick})=> {
    return(
        <button onClick={handleClick}>Generate a Quote</button>

    ) 
}
const Quote = () => {
    const[quotes,setQoutes]=useState("")
    const quotesData=["hello","Don't be hard on your self","take it easy","practice everyday" ,"practice makes perfect"]
    const handleClick= () => {

            const quoteIndex = Math.floor(Math.random()* quotesData.length);
            setQoutes(quotesData[quoteIndex])

    }
    
  return (
    <div>
        <h1>Random Quotes Generator</h1>
        {quotes && <h1>{quotes}</h1>} 
        <ButtonComponent handleClick={handleClick}/>
    </div>
  )
}

export default Quote