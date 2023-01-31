import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import Services from './pages/services';
import Home from './pages/home';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
