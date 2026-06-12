import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import NavGroup from './component/NavGroup.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Footer from './component/Footer.jsx';

function App() {
  return (
    <div className="app-layout">
      <NavGroup />

      <main className='content-wrapper'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;