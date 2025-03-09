import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Vans from './Vans/vans'
import VanDetail from './Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './Host/Dashboard';
import Income from './Host/Income';
import Reviews from './Host/Reviews';
import HostVans from './Host/HostVans';
import HostVanDetail from './Host/HostVanDetail';
import HostVanInfo from './Host/HostVanInfo';
import HostVanPricing from './Host/HostVanPricing';
import HostVanPhotos from './Host/HostVanPhotos';
import HostLayout from './components/HostLayout';
import AuthRequired from './components/AuthRequired';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          /> 

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
    
export default App;