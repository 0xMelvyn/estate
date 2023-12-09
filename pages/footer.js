import React from 'react';
import Image from 'next/image';
import design from '../public/design.png';
import { BsEnvelopeFill, BsInstagram, BsMessenger } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='absolute left-0 bg-white text-center text-gray-700 w-full'>
        <hr className="my-6 border-black" />
        <div className='my-5'>
            <a href="/"><Image className='mx-auto' src={design} width={250} height={250}/></a>
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
  );
};

export default Footer;
