import React, {useEffect, useState} from 'react';
import './App.css';
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import DonutDetailsPage from "./components/donut-details";
import ShoppingCart from "./components/shopping-cart";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path ="/donut/:id" element={<DonutDetailsPage/>}/>
                <Route path ="/cart" element={<ShoppingCart/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
