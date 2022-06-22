import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Creatorlogin from './components/Creator/Login/Creatorlogin';
import Creatorprofile from './components/Creator/Profile/Creatorprofile';
import Userlogin from './components/User/Login/Userlogin';
import Userprofile from './components/User/Profile/Userprofile';
import { AuthProvider } from './context/FirebaseContext';
import CreatorProfile from './pages/CreatorProfile';
import NavBar from './components/NavBar'

// Merge from cart
import Cart from './components/Cart'
import PaymentGateway from './components/PaymentGateway'
import OrderStatus from './components/OrderStatus';
import TrackOrder from './components/TrackOrder'
// Merge end here


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/creator/:id' element={<CreatorProfile />} />
            <Route exact path="/creatorlogin" element={<Creatorlogin />} />
            <Route exact path="/creatorprofile" element={<Creatorprofile />} />
            <Route exact path='/userlogin' element={<Userlogin />} />
            <Route exact path='/userprofile' element={<Userprofile />} />

            {/* Merge from cart */}
            <Route exact path='/' element={<Cart />} />
            {/* <Route path='/payment-gateway' element={<PaymentGateway />} /> */}
            <Route path='/order-status' element={<OrderStatus />} />
            <Route path='/track-order' element={<TrackOrder />} />
            {/* Merge end here */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
