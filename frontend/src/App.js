import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Creatorlogin from './components/Creator/Login/Creatorlogin';
import Creatorprofile from './components/Creator/Profile/Creatorprofile';
import Userlogin from './components/User/Login/Userlogin';
import Userprofile from './components/User/Profile/Userprofile';
import { AuthProvider } from './context/FirebaseContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/creatorlogin" element={<Creatorlogin />} />
            <Route exact path="/creatorprofile" element={<Creatorprofile />} />
            <Route exact path='/userlogin' element={<Userlogin />} />
            <Route exact path='/userprofile' element={<Userprofile />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
