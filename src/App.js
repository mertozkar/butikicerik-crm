import React from 'react';
import AdminHome from './components/AdminHome';
import './styles/style.css';
import './styles/bootstrap.min.css'
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import SiteProvider from './context/SiteContext';
import { Link, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Col, Row } from 'reactstrap';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import Editors from './components/Editors';
import BrandsDetail from './components/BrandsDetail';
import Customer from './components/Customer';


function App() {

  const { user, logout } = UserAuth();

  return (
    <div className="App">
      {JSON.parse(localStorage.getItem("userIds")) ? <AuthContextProvider>
        <SiteProvider>
          <Toaster position="top-right" />
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<AdminHome />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/editors" element={<Editors />} />
              <Route path="/brand-details" element={<BrandsDetail />} />
            </Routes>
          </div>
        </SiteProvider>
      </AuthContextProvider> : <Login />}
    </div>
  );
}

export default App;
