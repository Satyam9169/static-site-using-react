import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Company from './components/company/Company';
import Investor from './components/Investor/Investor';
import Products from './components/Products/Products';
import Journal from './components/Journal/Journal';
import ReachUS from './components/ReachUS/ReachUS';
import NotFound from './components/Notfound/NotFound';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/company'} element={<Company />} />
        <Route path={'/investor'} element={<Investor />} />
        <Route path={'/products'} element={<Products />} />
        <Route path={'/journal'} element={<Journal />} />
        <Route path={'/reachus'} element={<ReachUS />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
