import React from 'react'

const Quiz = (props) => {
  function handleClick(){
const color = props.tof ? 'green': 'red'
}
  return (
    <div  onClick={()=> handleClick()}>
    <h1>{props.answer}</h1>
    

    </div>
  )
}

export default Quiz;