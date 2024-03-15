// Importing relevant components

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import OrdersManagement from './components/OrdersManagement';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
  
      <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Signup/>}></Route>  {/* Signup page (first page) shown when the website loads */}
        <Route exact path="/Login" element={<Login/>}></Route>  {/* Route for the login page */}
        <Route exact path="/Signup" element={<Signup/>}></Route>  {/* Route for the signup page (for users navigating from elsewhere) */}
        <Route exact path="/Dashboard" element={<Dashboard/>}></Route>  {/* Route for the dashboard page */}
        <Route exact path="/ProductManagement" element={<ProductManagement/>}></Route>  {/* Route for the product management page */}
        <Route exact path="/OrdersManagement" element={<OrdersManagement/>}></Route>  {/* Route for the orders management page */}
      </Routes>
      </Router> 
      </div>

  );
};

export default App;