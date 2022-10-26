import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Navber from './components/Navber/Navber';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
       <Navber></Navber>
       <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/about' element={<About>s</About>}></Route>
       </Routes>
       {/* <Header></Header>
       <Shop></Shop> */}
    </div>
  );
}

export default App;
