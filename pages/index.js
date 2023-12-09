'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import premier from '../public/premier.jpg';
import deuxieme from '../public/deuxieme.jpg';
import troisieme from '../public/troisieme.jpeg';
import quatre from '../public/quatre.jpeg';
import cinq from '../public/cinq.jpeg';
import six from '../public/six.jpeg';
import 'react-toastify/dist/ReactToastify.css';
  
export default function Home() {

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
      <main className='bg-white px-8'>
        <section className='sm:min-h-screen'>

          <div className='flex justify-around pt-14'>
            <Image src={premier} width={250} height={250} className='hidden lg:block w-1/6 h-1/6 pt-20 image-container-a' />
            <Image id='stop' src={deuxieme} width={150} height={150} className='w-5/6 lg:w-1/4'/>
            <Image src={troisieme} width={250} height={250} className='hidden lg:block w-1/6 h-1/6 pt-20 image-container-b'/>
          </div>
        </section>

        <section className='py-10' id="presentation">
            <h3 className='text-5xl sm:py-5 sm:px-12'>SAVOIR FAIRE & SAVOIR VOIR</h3>
              <div className='lg:w-1/2 sm:px-20 ml-auto'>
                <p className='text-md py-2 leading-8 text-gray-800'>
                L’expérience d’un accompagnement sur mesure, c’est identifier l’histoire racontée par le goût des clients : un accompagnement tel un confident de longue date.
                <br />
                La qualité du service et la responsabilité sont les conditions sine qua non de l’excellence de BORDAS immobilier.
                <br />
                L’achat de votre résidence, principale ou secondaire : qu’y a-t-il de plus beau dans une aventure comme celle-ci ? il n’y a aucun doute, le voyage est aussi important que la destination.
                </p>
                <p className='text-xl py-2 leading-8 text-black text-right mx-6 underline'>
                  <a className='hover:text-gray-600' href="/ventes">Nos biens en vente</a>
                </p>
              </div>
              <div className='flex justify-around pt-14'>
                <Image src={quatre} className='hidden lg:block w-1/4 h-1/4 image-container-c'/>
                <Image src={cinq} className='w-5/6 lg:w-1/4'/>
                <Image src={six} className='hidden lg:block w-1/4 h-1/4 pt-44 image-container-d'/>
              </div>
        </section>

        <section className='py-10' id="services">
              <div className='lg:w-1/2 sm:px-20'>
                <p className='text-md py-2 leading-8 text-gray-800'>
                L’écoute, le temps, la sincérité sont nos valeurs.
                <br />
                Passionnés d’architecture intérieur et design, nous saurons vous guider quant à la rénovation et la décoration de votre bien.
                <br />
                BORDAS, c’est aussi une rencontre avec des artistes contemporains, du Street art, des sculpteurs et des peintres venant de tous les continents car les univers de l’art et de l’immobilier se conjuguent autour d’un mot : l’esthétisme
                </p>
                <a href="/contact" className='text-xl py-2 leading-8 text-black underline hover:text-gray-600'>Nous contacter</a>
              </div>
        </section>
      </main>
    </div>
  )
}