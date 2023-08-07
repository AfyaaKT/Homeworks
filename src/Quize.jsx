 import Choises from './component/Choises';
 
 const Quize = () => {
  const answers=[{
    answer:'Another job with heigher salary ',
    trueOrFalse:false,
    id:1

},{
    answer:'Back Pain',
    trueOrFalse:true,
    id:2
},{
    answer:'Eye pain',
    trueOrFalse:false,
    id:3
}]

   return (
    <>
    <h1>why did the js developers quit job</h1> 
    <Choises  answers={answers}/>
    </>  
     );
 };
 
 
 export default Quize;
 
  