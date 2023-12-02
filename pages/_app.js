import NavBar from '../pages/navbar';
import Footer from '../pages/footer';
import '@/styles/globals.css'
import Head from 'next/head';
import React, { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Location Montluçon</title>
      </Head>
      <NavBar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
