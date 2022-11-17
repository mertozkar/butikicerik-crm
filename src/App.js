import React from 'react';
import './styles/style.css';
import './styles/bootstrap.min.css'
import Navbar from './components/Navbar';
import SiteProvider, { useSiteContext } from './context/SiteContext';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';


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
          <Content />
          <Footer />
        </SiteProvider>
      </AuthContextProvider> : <Login />}
    </div>
  );
}

export default App;
