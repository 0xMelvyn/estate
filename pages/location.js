import app1 from '../public/app1.jpg';
import app2 from '../public/app2.jpg';
import app3 from '../public/app3.jpg';
import app4 from '../public/app4.jpg';
import Image from 'next/image';

const ventes = () => {
    return (
      <div>
        <main className='bg-white px-8'>

        <section className='my-10 lg:my-40 flex'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:px-20'>
                    <h1 className='w-full lg:w-1/3 text-3xl mb-5 justify-around'>BEAU 3 PIÈCES LUMINEUX ET ENSOLEILLÉ</h1>
                    <hr className='border-black w-1/6' />
                    <div className='pt-5 flex justify-around lg:hidden'>
                        <Image className='object-contain' src={app1} width={250} height={250}/>   
                    </div>
                    <p className='lg:w-1/2 my-5 text-gray-800'>
                    Dans le secteur de Gorbella, le Ray, au pied du tramway et des commerces, venez découvrir ce beau 3 pièces en étage élevé. L’appartement de 64 M2 dispose d’une jolie...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :729 €</h2>
                    <div className='flex justify-around lg:justify-start'>
                        <p className=':mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className='hidden lg:block lg:pt-5 lg:pt-0 lg:w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app1} width={250} height={250}/>   
                </div>
            </div>
        </section>

        <section className='my-40 flex'>
            <div className='flex flex-col lg:flex-row justify-around'>
                <div className='lg:px-20'>
                    <h1 className='w-full lg:w-1/3 text-3xl mb-5'>MAISON RÉNOVÉE</h1>
                    <hr className='border-black w-1/6' />
                    <div className='pt-5 flex justify-around lg:hidden'>
                        <Image className='object-contain' src={app2} width={500} height={500}/>   
                    </div>
                    <p className='lg:w-1/2 my-5 text-gray-800'>
                    VENDUE. Située à 15 minutes du centre ville, cette maison édifiée dans un écrin de verdure et baignée de soleil saura vous séduire par son style méditérannéen et...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :1259 €</h2>
                    <div className='flex justify-around lg:justify-start'>
                        <p className=':mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className='hidden lg:block lg:pt-5 lg:pt-0 lg:w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app2} width={500} height={500}/>   
                </div>
            </div>
        </section>

        <section className='my-40 flex'>
            <div className='flex flex-col lg:flex-row justify-around'>
                <div className='lg:px-20'>
                    <h1 className='w-full lg:w-1/3 text-3xl mb-5'>DUPLEX PLACE WILSON</h1>
                    <hr className='border-black w-1/6' />
                    <div className='pt-5 flex justify-around lg:hidden'>
                        <Image className='object-contain' src={app3} width={500} height={500}/>   
                    </div>
                    <p className='lg:w-1/2 my-5 text-gray-800'>
                    VENDU. PLACE WILSON.DERNIER ÉTAGE. Au cœur de Montluçon, dans un immeuble classé historique, venez découvrir ce magnifique appartement, esprit «villa sur le toit » accompagné de son jardin d’hiver dont...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :1499 €</h2>
                    <div className='flex justify-around lg:justify-start'>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className='hidden lg:block lg:pt-5 lg:pt-0 lg:w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app3} width={500} height={500}/>   
                </div>
            </div>
        </section>

        <section className='my-40 flex'>
            <div className='flex flex-col lg:flex-row justify-around'>
                <div className='lg:px-20'>
                <h1 className='w-full lg:w-1/3 text-3xl mb-5'>3 PIÈCES ÉSPRIT MAISON ET SA VUE PANORAMIQUE</h1>
                <hr className='border-black w-1/6' />
                    <div className='pt-5 flex justify-around lg:hidden'>
                        <Image className='object-contain' src={app4} width={500} height={500}/>   
                    </div>
                    <p className='lg:w-1/2 my-5 text-gray-800'>
                    VENDU Situé dans un écrin de verdure et au calme complet, venez découvrir notre 3 pièces et sa magnifique vue dégagée sur la ville et la mer . L’appartement dispose...
                    </p>
                    <h2 className='my-5 text-xl text-gray-800'>PRIX :750 €</h2>
                    <div className='flex justify-around lg:justify-start'>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                        <p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p>
                    </div>
                </div>
                <div className='hidden lg:block lg:pt-5 lg:pt-0 lg:w-3/4 flex mx-auto'>
                    <Image className='object-contain' src={app4} width={500} height={500}/>   
                </div>
            </div>
        </section>
        
      </main>
      </div>
    );
  };
  
  export default ventes;
  