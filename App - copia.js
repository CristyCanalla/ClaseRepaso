import ItemListContainer from './ItemListContainer'
import './App.css';
import Error from './Error';
import NavBar from './NavBar';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import CartProvider from './CartContext';


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/televisores/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/notebooks/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
     </CartProvider>
     </BrowserRouter>
    </>
  );
}

export default App;
