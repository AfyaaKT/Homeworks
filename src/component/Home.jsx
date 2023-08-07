import { useState } from "react";
import Card from "./Card";
const Home = () => {
    const initList=["Konan","Pokimons","Sandibel"]
    const [cartoons,setCartoons]=useState(["Konan","Pokimons","Sandibel"])
    return (
      <div>
        <Search cartoonlist={cartoons}/>
        <Card cartoonlist={cartoons}/>
      </div>
    )
  }
  
  export default Home;



