import Content from './components/content/Content';
import React from 'react';
import Home from './pages/Home'
import Header from './components/Header';
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import logo from './logo.svg';
import './scss/app.scss';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Description from './pages/Descripton';


export const SearchContext = React.createContext('')

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
