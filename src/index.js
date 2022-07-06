import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Addcars from './components/Addcars';
import Addcars2 from './components/Addcars2';
import Cars from './components/Cars';
import Car from './components/Car';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <BrowserRouter>
    <Routes>

        <Route path="/car/:pk" element={<Car authed={true}/>} />
        <Route path="/" element={<Cars authed={true}/>} />
        <Route path="/addcar" element={<Addcars authed={true} history={true}/>} />
        <Route path="/addcar2" element={<Addcars2 authed={true} history={true}/>} />
        
    </Routes>
  </BrowserRouter>);