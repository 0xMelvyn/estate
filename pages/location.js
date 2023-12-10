import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const AnnoncesPage = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://estate-strapi.onrender.com/api/annonces/?populate=*');
        const data = await response.json();

        // Filtrer les annonces avec l'attribut "vente"
        const annoncesVente = data.data.filter(annonce => annonce.attributes.Type === 'location');

        setAnnonces(annoncesVente);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {annonces.map((annonce) => (
        <section key={annonce.id} className='my-10 lg:my-40 flex'>
          <div className='flex flex-col lg:flex-row'>
            <div className='lg:px-20'>
              <h1 className='w-full lg:w-1/3 text-3xl mb-5 justify-around'>{annonce.attributes.Titre}</h1>
              <hr className='border-black w-1/6' />
              <div className='pt-5 flex justify-around lg:hidden'>
                {annonce.attributes.image && annonce.attributes.image.data && annonce.attributes.image.data.length > 0 && (
                  <img
                    src={`${annonce.attributes.image.data[0].attributes.url}`}
                    alt={annonce.attributes.image.name}
                    width={500}
                    height={500}
                  />
                )}
              </div>
              <p className='lg:w-1/2 my-5 text-gray-800'>{truncateText(annonce.attributes.Description[0].children[0].text, 200)}</p>
              {/* Adjust 200 to your desired maximum length */}
              <h2 className='my-5 text-xl text-gray-800'>PRIX : {annonce.attributes.Prix}</h2>
              <div className='flex justify-around lg:justify-start'>
                <Link href={`/fiche/${annonce.id}`}>
                  <p className='mx-5 border-2 p-2 border-gray-800'>Voir la fiche</p>
                </Link>
                <a href="/contact"><p className='mx-5 border-2 p-2 border-gray-800'>Nous contacter</p></a>
              </div>
            </div>
            <div className='hidden lg:block lg:pt-5 lg:pt-0 lg:w-3/4 flex mx-auto'>
              {annonce.attributes.image && annonce.attributes.image.data && annonce.attributes.image.data.length > 0 && (
                <img
                  src={`${annonce.attributes.image.data[0].attributes.url}`}
                  alt={annonce.attributes.image.name}
                  width={500}
                  height={500}
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AnnoncesPage;
