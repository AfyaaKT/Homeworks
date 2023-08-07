const Choises=(props)=>{
    const answers=props.answers;
    const handleClick=() =>(
      "Correct"
  );
      
    return(
      <div>
        {answers.map(item=><div  key={item.id}>{item.trueOrFalse ? <button onClick={()=>handleClick()}  >{tem.answer}</button>:<div>{item.answer}</div>}  </div>)}
  
      </div>
    );
   };
   export default Choises;