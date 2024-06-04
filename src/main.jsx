import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// pages
import Home from './Pages/Home.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ContacPage from "./Pages/ContacPage.jsx";
import BlogPage from './Pages/BlogPage.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import ServicePage from './Pages/ServicePage.jsx'




const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="Nexgen" element={<App />} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contact' element={<ContacPage/>}/>
      <Route path='Blog' element={<BlogPage/>}/>
      <Route path='Product' element={<ProductPage/>}/>
      <Route path='Service' element={<ServicePage/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
