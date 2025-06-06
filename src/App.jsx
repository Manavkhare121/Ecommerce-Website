import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Loginsignup from './components/Pages/Loginsignup';
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="womens" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          
          <Route path='/product' element={<Product />} />
          <Route path='/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<Loginsignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
