import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Vans from './Vans/vans'
import VanDetail from './Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './Host/Dashboard';
import Income from './Host/Income';
import Reviews from './Host/Reviews';
import HostVans from './Host/HostVans';
import HostVanDetail from './Host/HostVanDetail';
import HostLayout from './components/HostLayout';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;