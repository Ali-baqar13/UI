import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
  console.log("1 layout")
  return (

    <>
        <Header />
        <main className="body-color">
        <Outlet/>
     
        </main>
        
        </>
     
  )
}

export default Layout