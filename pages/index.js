'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BsEnvelopeFill, BsInstagram, BsMessenger } from 'react-icons/bs';
import design from '../public/design.png';
import premier from '../public/premier.jpg';
import deuxieme from '../public/deuxieme.jpg';
import troisieme from '../public/troisieme.jpeg';
import quatre from '../public/quatre.jpeg';
import cinq from '../public/cinq.jpeg';
import six from '../public/six.jpeg';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const notify = () => toast('Wow so easy!');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ok34pd9', 'template_yr9yz4q', form.current, 'pGbqVmTvTEyeeMMts')
      .then(
        (result) => {
          toast.success('Email sent!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkMode ? 'dark' : 'light',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageContainerB = document.querySelector('.image-container-b');
      const imageContainerA = document.querySelector('.image-container-a');
      const textSection = document.querySelector('#stop');
      const textSectionPosition = textSection.offsetTop;

      if (scrollPosition < textSectionPosition) {
        imageContainerA.style.transform = `translateY(${scrollPosition / 2}px)`;
        imageContainerB.style.transform = `translateY(-${scrollPosition / 2}px)`;
      } else {
        imageContainerA.style.transform = `translateY(${textSectionPosition / 2}px)`;
        imageContainerB.style.transform = `translateY(-${textSectionPosition / 2}px)`;
      }
    };

    const handleImageScroll = () => {
      const scrollPosition = window.scrollY;
      const imageContainerC = document.querySelector('.image-container-c');
      const imageContainerD = document.querySelector('.image-container-d');
      imageContainerC.style.transform = `translateY(-${scrollPosition / 10}px)`;
      imageContainerD.style.transform = `translateY(${scrollPosition / 10}px)`;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleImageScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleImageScroll);
      }
    };
  },);

  return (
    <div>
      <ToastContainer />
      <main className='bg-white px-8'>
        <section className='min-h-screen'>
          <nav className='pt-1 flex justify-between'>
            <a href="#accueil"><Image src={design} width={250} height={250}/></a>
            <ul className='flex items-center'>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/">Accueil</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/ventes">À vendre</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/location">Location</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#gestion">Gestion</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#estimation">Estimation</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#contact">Contact</a></h1></li>
            </ul>
          </nav>

          <div className='flex justify-around pt-14'>
            <Image src={premier} width={250} height={250} className='w-1/6 h-1/6 pt-20 image-container-a' />
            <Image id='stop' src={deuxieme} width={150} height={150} className='w-1/4'/>
            <Image src={troisieme} width={250} height={250} className='w-1/6 h-1/6 pt-20 image-container-b'/>
          </div>
        </section>

        <section className='py-10' id="presentation">
            <h3 className='text-5xl py-5 px-12'>SAVOIR FAIRE & SAVOIR VOIR</h3>
              <div className='w-1/2 px-20 ml-auto'>
                <p className='text-md py-2 leading-8 text-gray-800'>
                L’expérience d’un accompagnement sur mesure, c’est identifier l’histoire racontée par le goût des clients : un accompagnement tel un confident de longue date.
                <br />
                La qualité du service et la responsabilité sont les conditions sine qua non de l’excellence de BORDAS immobilier.
                <br />
                L’achat de votre résidence, principale ou secondaire : qu’y a-t-il de plus beau dans une aventure comme celle-ci ? il n’y a aucun doute, le voyage est aussi important que la destination.
                </p>
                <p className='text-xl py-2 leading-8 text-black text-right mx-6 underline'>
                  <a className='hover:text-gray-600' href="#ventes">Nos biens en vente</a>
                </p>
              </div>
              <div className='flex justify-around pt-14'>
                <Image src={quatre} className='w-1/4 h-1/4 image-container-c'/>
                <Image src={cinq} className='w-1/4'/>
                <Image src={six} className='w-1/4 h-1/4 pt-44 image-container-d'/>
              </div>
        </section>

        <section className='py-10' id="services">
              <div className='w-1/2 px-20'>
                <p className='text-md py-2 leading-8 text-gray-800'>
                L’écoute, le temps, la sincérité sont nos valeurs.
                <br />
                Passionnés d’architecture intérieur et design, nous saurons vous guider quant à la rénovation et la décoration de votre bien.
                <br />
                BORDAS, c’est aussi une rencontre avec des artistes contemporains, du Street art, des sculpteurs et des peintres venant de tous les continents car les univers de l’art et de l’immobilier se conjuguent autour d’un mot : l’esthétisme
                </p>
                <a href="#contact" className='text-xl py-2 leading-8 text-black underline hover:text-gray-600'>Nous contacter</a>
              </div>
        </section>
        
        <footer className='absolute left-0 bg-white text-center text-gray-700 w-full'>
        <hr className="my-6 border-black" />
          <div className='my-5'>
            <a href="#accueil"><Image className='mx-auto' src={design} width={250} height={250}/></a>
            <p className='text-black'>Horaires : </p>
            <p>Du lundi au samedi de 9h00 à 19h00</p>

            <div className='flex justify-center text-2xl my-5 gap-5'>
                <a className='hover:text-black transition duration-500' href="https://www.messenger.com/t/100088349492050/" target='_blank'><BsMessenger/></a>
                <a className='hover:text-black transition duration-500' href="https://t.me/MelvynHoarau" target='_blank'><BsInstagram/></a>
                <a className='hover:text-black transition duration-500' href="mailto:melvynhoarau@icloud.com" target='_blank'><BsEnvelopeFill/></a>
            </div>

            <p>contact@immobilier.com</p>
            <p>07 67 85 68 37</p>
            <div>
                <small>&copy; MELVYN WEBDESIGN. All right reserved.</small>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}