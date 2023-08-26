import {  Route,  Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Cartoon';
import Ratings from './component/Ratings';
import ResPage from './component/ResPage';
import Quize from './component/Quize';
import Quote from './component/Quote';
import Todo from './component/Todo';




function App() {
 
  return (
    <div >
      <Home/>
      <Todo/>
      <Quote/>
      <Quize/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Ratings/>}/>
        <Route path='/ResPage' element={<ResPage/>} />
      </Routes>
      

   </div>
  )


}

export default App;
