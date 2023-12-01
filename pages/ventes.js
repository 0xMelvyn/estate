import design from '../public/design.png';
import app1 from '../public/app1.jpg';
import app2 from '../public/app2.jpg';
import app3 from '../public/app3.jpg';
import app4 from '../public/app4.jpg';
import Image from 'next/image';
import { BsEnvelopeFill, BsInstagram, BsMessenger } from 'react-icons/bs';

const ventes = () => {
    return (
      <div>
        <main className='bg-white px-8'>
        <section>
          <nav className='pt-1 flex justify-between'>
            <a href="#accueil"><Image src={design} width={250} height={250}/></a>
            <ul className='flex items-center'>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/">Accueil</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8 underline'><a href="/ventes">À vendre</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="/location">Location</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#gestion">Gestion</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#estimation">Estimation</a></h1></li>
              <li><h1 className='text-xl font-Metropolis-Regular hover:underline transition duration-500 px-8'><a href="#contact">Contact</a></h1></li>
            </ul>
          </nav>
        </section>

        <section className='my-40 flex'>
            <div className='flex justify-around'>
                <div className='px-20'>
                    <h1 className='w-1/3 text-3xl mb-5 tracking-1'>BEAU 3 PIÈCES LUMINEUX ET ENSOLEILLÉ</h1>
                    <hr className='border-black w-1/6' />
                    <p className='w-1/2 my-5 text-gray-800'>
                    Dans le secteur de Gorbella, le Ray, au pied du tramway et des commerces, venez découvrir ce beau 3 pièces en étage élevé. L’appartement de 64 M2 dispose d’une jolie...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :219 000 €</h2>
                    <div className='flex'>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className='w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app1} width={250} height={250}/>   
                </div>
            </div>
        </section>

        <section className='my-40 flex'>
            <div className='flex justify-around'>
                <div className='px-20'>
                    <h1 className='w-1/3 text-3xl mb-5'>MAISON RÉNOVÉE</h1>
                    <hr className='border-black w-1/6' />
                    <p className='w-1/2 my-5 text-gray-800'>
                    VENDUE. Située à 15 minutes du centre ville, cette maison édifiée dans un écrin de verdure et baignée de soleil saura vous séduire par son style méditérannéen et...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :525 000 €</h2>
                    <div className='flex'>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className=' w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app2} width={500} height={500}/>   
                </div>
            </div>
        </section>

        <section className='my-40 flex'>
            <div className='flex justify-around'>
                <div className='px-20'>
                    <h1 className='w-1/3 text-3xl mb-5'>DUPLEX PLACE WILSON</h1>
                    <hr className='border-black w-1/6' />
                    <p className='w-1/2 my-5 text-gray-800'>
                    VENDU. PLACE WILSON.DERNIER ÉTAGE. Au cœur de Montluçon, dans un immeuble classé historique, venez découvrir ce magnifique appartement, esprit «villa sur le toit » accompagné de son jardin d’hiver dont...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :995 000 €</h2>
                    <div className='flex'>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className=' w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app3} width={500} height={500}/>   
                </div>
            </div>
        </section>

        <section className='my-40 flex'>
            <div className='px-20'>
                <h1 className='w-1/3 text-3xl mb-5'> 3 PIÈCES ÉSPRIT MAISON ET SA VUE PANORAMIQUE</h1>
                <hr className='border-black w-1/6' />
                <p className='w-1/2 my-5 text-gray-800'>
                VENDU Situé dans un écrin de verdure et au calme complet, venez découvrir notre 3 pièces et sa magnifique vue dégagée sur la ville et la mer . L’appartement dispose...
                </p>
                <h2 className='my-5 text-xl text-gray-800'>PRIX :228 000 €</h2>
                <div className='flex'>
                    <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                    <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                </div>
            </div>
            <div className='w-3/4 flex mx-auto'>
                <Image className='object-contain' src={app4} width={500} height={500}/>   
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
    );
  };
  
  export default ventes;
  