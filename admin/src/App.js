import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfluencersList from './pages/InfluencersList';
import Sidebar from './components/Sidebar'
import UsersList from './pages/UsersList'
import BrandsList from './pages/BrandsList'
import OrdersList from './pages/OrdersList'
import ProductsList from './pages/ProductsList';


function App() {
  return (
    <div className="App" style={{ display:'flex'}}>
      <Router>
     <Sidebar/>
        <Routes>
          <Route path='/users-list' element={<UsersList />} />
          <Route path='/brands-list' element={<BrandsList />} />
          <Route path='/orders-list' element={<OrdersList />} />
          <Route path='/products-list' element={<ProductsList />} />
          <Route path='/influencers-list' element={<InfluencersList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
