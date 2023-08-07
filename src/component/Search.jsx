import React from 'react'

const Search = (props) => {
  const myCartoon=props.cartoonlist

  const handleChange =()=>{
    const x=myCartoon.filter()
  }
  return (
    <div>
      <input  value="search" onChange={handleChange} />
    </div>
  )
}

export default Search;
