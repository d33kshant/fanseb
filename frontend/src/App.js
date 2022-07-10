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
import CartPage from './pages/CartPage';
import BrandProducts from './components/Creator/Brand-dashboard/BrandProducts/BrandProducts';
import AddProduct from './pages/AddProduct/AddProduct';
import Dashboard from './components/Dashboard/Dashboard';
import ProductList from './pages/ProductList/ProductList';
import Collections from './pages/ProductList/Collections';
import Products from './pages/ProductList/Products';
import Pebbles from './pages/ProductList/Pebbles';
import ManageProduct from './pages/ManaageProduct/ManageProduct';
import RequireAuth from './components/User/RequireAuth/RequireAuth';
import EditBrandProfile from './pages/EditBrandProfile/EditBrandProfile';

function App() {
  return (
    <div>
      <CartProvider>
        <AuthProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<Userlogin />} />
              <Route exact path='/cart' element={<CartPage />} />
              <Route path='/creator/:id' element={<CreatorProfile />} />
              <Route exact path="/creatorlogin" element={<Creatorlogin />} />
              <Route exact path="/creatorprofile" element={<Creatorprofile />} />
              {/* <Route exact path='/userlogin' element={<Userlogin />} /> */}
              <Route exact path='/userprofile' element={<Userprofile />} />
              <Route path='/order-status' element={<OrderStatus />} />
              <Route path='/track-order' element={<TrackOrder />} />
              {/* dashboard routes */}
              <Route exact path='/dashboard' element={
                <Dashboard />}>
                <Route index element={<BrandDashboard />}></Route>
                <Route exact path='brand-dashboard' element={<BrandDashboard />} />
                <Route exact path='brand-products' element={<BrandProducts />} />
                <Route exact path='addProduct' element={<AddProduct />} />
                <Route exact path='manageProduct' element={<ManageProduct />} />
                <Route exact path='editBrandProfile' element={<EditBrandProfile />} />
                <Route exact path='productList' element={<ProductList />}>
                  <Route index element={<Products />} />
                  <Route exact path='collections' element={<Collections />} />
                  <Route exact path='pebbles' element={<Pebbles />} />
                </Route>
              </Route>
              <Route exact path='/addProduct' element={<AddProduct />} />
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
