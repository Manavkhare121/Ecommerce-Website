import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import Admin from './components/Admin/Admin'
import Cart from './components/Pages/Cart';
import Loginsignup from './components/Pages/Loginsignup';
import './App.css';
import Footer from './components/Footer/Footer';
import men_banner from "./assets/banner.jpg"
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner}category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kid" />} />
          
          <Route path='/product' element={<Product />} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<Loginsignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
