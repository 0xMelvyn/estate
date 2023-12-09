import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const FicheDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [annonceDetails, setAnnonceDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchAnnonceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/annonces/${id}/?populate=*`);
        const data = await response.json();

        console.log('Réponse de l\'API :', data);

        if (data && data.data) {
          setAnnonceDetails(data.data.attributes);
          setSelectedImage(data.data.attributes.image.data[0]);
        } else {
          console.error('La réponse de l\'API ne contient pas les données attendues.');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données depuis Strapi', error);
      }
    };

    if (id) {
      fetchAnnonceDetails();
    }
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {annonceDetails ? (
        <div className='px-20'>
          <h1 className='py-5 text-5xl'>{annonceDetails.Titre}</h1>
          <hr className='border-black w-1/6' />
          <div className='lg:flex lg:gap-2 pt-5'>
            {/* Selected image on the left */}
            <img
              className='w-full lg:w-2/3 mb-2 lg:mb-0'
              src={`http://localhost:1337${selectedImage.attributes.url}`}
              alt={selectedImage.attributes.name}
              width={500}
              height={500}
            />
            {annonceDetails.image.data.length > 1 && (
              <div className='lg:w-1/3 grid grid-cols-3 lg:grid-rows-6 gap-2'>
                {/* Other images on the right in a grid layout */}
                {annonceDetails.image.data.map((image) => (
                  <img
                    className='hover:scale-105 transition duration-500'
                    key={image.id}
                    src={`http://localhost:1337${image.attributes.url}`}
                    alt={image.attributes.name}
                    width={500}
                    height={500}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            )}
          </div>
          <h2 className='my-5 text-3xl text-gray-800'>PRIX : {annonceDetails.Prix} €</h2>
          <p className='text-xl'>{annonceDetails.Description[0].children[0].text}</p>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
};

export default FicheDetail;
