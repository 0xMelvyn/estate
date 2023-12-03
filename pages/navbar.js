import React from 'react';
import Image from 'next/image';
import { LuMenu } from 'react-icons/lu';
import design from '../public/design.png';

const NavBar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className='pt-1 flex justify-between items-center'>
      <a href="/"><Image src={design} width={250} height={250}/></a>
      <a className='lg:hidden text-5xl mx-2' href="#" onClick={(e) => {
        e.preventDefault();
        toggleMobileMenu();
      }}><LuMenu /></a>
      <ul className={`lg:flex ${isMobileMenuOpen ? 'flex fixed top-0 left-0 w-full h-full flex-col items-center justify-center space-y-12 bg-white z-50' : 'hidden'}`}>
        <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/">Accueil</a></h1></li>
        <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/ventes">À vendre</a></h1></li>
        <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/location">Location</a></h1></li>
        <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#gestion">Gestion</a></h1></li>
        <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#estimation">Estimation</a></h1></li>
        <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#contact">Contact</a></h1></li>
      </ul>
    </nav>
  );
};

export default NavBar;
