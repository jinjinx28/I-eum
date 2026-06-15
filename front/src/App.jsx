import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import NavGroup from './component/NavGroup.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Footer from './component/Footer.jsx';
import CrimeMenu from './component/CrimeMenu.jsx';
import CrimeDetail from './component/CrimeDetail.jsx';

function App() {
  return (
    <>
      <NavGroup />

       <div className="app-layout">
        <main className='content-wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/crimemenu" element={<CrimeMenu />} />
            <Route path="/crimemenu/:typeId" element={<CrimeDetail />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </>
  );
}

export default App;