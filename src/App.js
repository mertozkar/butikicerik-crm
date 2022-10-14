import React from 'react';
import AdminHome from './components/AdminHome';
import './styles/style.css';
import './styles/bootstrap.min.css'
import { Row } from 'reactstrap';
import Navbar from './components/Navbar';
import Brands from './components/Brands';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <AdminHome />
        <Brands />
      </div>
    </div>
  );
}

export default App;
