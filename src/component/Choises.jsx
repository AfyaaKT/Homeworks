const Choises=({answers,handleAnswerClick})=>{
    
    
      
    return(
      <div>
        {answers.map(item=><div
           key={item.id}
           onClick={()=> handleAnswerClick()}
           style={{backgroundColor: item.trueOrFalse? 'greem': 'red'}}> 
           {item.answer}

          </div>)}
  
      </div>
    );
   };
   export default Choises;