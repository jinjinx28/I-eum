import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import NavGroup from './component/NavGroup.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';

function App() {
  return (
    <div className="App">
      <NavGroup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 이음 (I-eum) 안전지원 포털. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;