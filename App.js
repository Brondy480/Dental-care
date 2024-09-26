import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './Page.js/Login';
import Registration from './Page.js/Registration';
import Home from './Page.js/Home';
import Navbar from './Component/Navbar';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Home/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Login' element={<Login/>}/>
   <Route path='/Registration' element={<Registration/>}/>
   <Route/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
