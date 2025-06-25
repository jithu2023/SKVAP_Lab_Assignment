// src/components/Layout.jsx 
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px', minHeight: '80vh' }}>{children}</main>
      <Footer />
    </>
  );
}
