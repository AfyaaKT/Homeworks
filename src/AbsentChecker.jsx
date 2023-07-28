function AbsentChecker(){
    const girls=[
        {name:"Alia",
         state: true},
        {name:"Zahra",
        state: true},
        {name:"Noor",
        state: false}];

    return(<ul>
{girls.map((item)=>
        <li key={item.name}><label>{item.name}</label>{item.state?<p style={{color:"green"}}>{item.name} is here</p> : <p style={{color:"red"}}>{item.name} is not here</p>}</li>
    )}
    </ul>
    );
};
export default AbsentChecker;
