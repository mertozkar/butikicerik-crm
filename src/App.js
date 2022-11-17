import React from 'react';
import AdminHome from './components/AdminHome';
import './styles/style.css';
import './styles/bootstrap.min.css'
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import SiteProvider, { useSiteContext } from './context/SiteContext';
import { Link, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Col, Row } from 'reactstrap';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import Editors from './components/Editors';
import BrandsDetail from './components/BrandsDetail';
import EditorDetail from './components/EditorDetail';
import Customer from './components/Customer';
import Archive from './components/Archive';
import Notifications from './components/Notifications';
import classNames from 'classnames';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  const { user, logout } = UserAuth();
  const { menuToggle } = useSiteContext();

  console.log(menuToggle)

  return (
    <div className="App">
      {JSON.parse(localStorage.getItem("userIds")) ? <AuthContextProvider>
        <SiteProvider>
          <Toaster position="top-right" />
          <Header />
          <Navbar />
          <div className={classNames({
            "content": true,
            "open": menuToggle,
          })}>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<AdminHome />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/editors" element={<Editors />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/brand-details" element={<BrandsDetail />} />
              <Route path='/editor-details' element={<EditorDetail />} />
            </Routes>
          </div>
          <Footer />
        </SiteProvider>
      </AuthContextProvider> : <Login />}
    </div>
  );
}

export default App;
