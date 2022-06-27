import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Creatorlogin from './components/Creator/Login/Creatorlogin';
import Creatorprofile from './components/Creator/Profile/Creatorprofile';
import Userlogin from './components/User/Login/Userlogin';
import Userprofile from './components/User/Profile/Userprofile';
import { AuthProvider } from './context/FirebaseContext';
import BrandDashboard from './components/Creator/Brand-dashboard/BrandDashboard';
import ProductsList from './components/Creator/ProductsList/ProductsList';
import OrdersList from './components/Creator/OrdersList/OrdersList';
import Cart from './components/Creator/Cart'
import OrderStatus from './components/Creator/OrderStatus'
import TrackOrder from './components/Creator/TrackOrder'
import CreatorProfile from './pages/CreatorProfile';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';


function App() {
  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<Cart />} />
              <Route path='/creator/:id' element={<CreatorProfile />} />
              <Route exact path="/creatorlogin" element={<Creatorlogin />} />
              <Route exact path="/creatorprofile" element={<Creatorprofile />} />
              <Route exact path='/userlogin' element={<Userlogin />} />
              <Route exact path='/userprofile' element={<Userprofile />} />
              <Route path='/order-status' element={<OrderStatus />} />
              <Route path='/track-order' element={<TrackOrder />} />
              <Route exact path='/brand-dashboard' element={<BrandDashboard />} />
              <Route exact path='/productsList' element={<ProductsList />} />
              <Route exact path='/orderslist' element={<OrdersList />} />
            </Routes>
          </Router>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;
