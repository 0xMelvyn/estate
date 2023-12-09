import { useRef } from "react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEnvelopeFill, BsTelephone, BsInstagram } from 'react-icons/bs';

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ok34pd9', 'template_yr9yz4q', form.current, 'pGbqVmTvTEyeeMMts')
      .then((result) => {
        toast.success('Email envoyé !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
    <ToastContainer />
      <div className="px-20">
        <h3 className='text-5xl py-1 font-metropolis'>Contactez nous</h3>
        <div className="flex flex-col gap-10 py-5 lg:flex-row lg:flex-wrap">
          <div className='flex flex-col text-center basis-1/8 flex-1 gap-10 leading-7'>
            <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500">
              <BsEnvelopeFill className='mx-auto text-3xl' />
              <h4>Email</h4>
              <h5 className='text-sm text-gray-500'>contact@immobilier.com</h5>
              <a href="mailto:melvynhoarau@icloud.com" target='_blank' rel='noopener noreferrer'>Envoyer un message</a>
            </article>
            <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500">
              <BsTelephone className='mx-auto text-3xl' />
              <h4>Téléphone</h4>
              <h5 className='text-sm text-gray-500'>07 67 85 68 37</h5>
              <a href="https://www.messenger.com/t/100088349492050/" target='_blank' rel='noopener noreferrer'>Envoyer un message</a>
            </article>
            <article className="flex flex-col shadow-lg rounded-lg py-5 hover:scale-110 transition duration-500">
              <BsInstagram className='mx-auto text-3xl' />
              <h4>Telegram</h4>
              <h5 className='text-sm text-gray-500'>@MontluImmo</h5>
              <a href="https://t.me/MelvynHoarau" target='_blank' rel='noopener noreferrer'>Envoyer un message</a>
            </article>
          </div>
          <div className='flex flex-col text-center basis-1/3 flex-1'>
          <form className='flex flex-col gap-5 py-5' ref={form} onSubmit={sendEmail}>
  <input className='border-b-2 border-solid border-black bg-transparent rounded-t-lg p-5 text-black focus:outline-black' type="text" name='name' placeholder='Nom et prénom' required />
  <input className='border-b-2 border-solid border-black bg-transparent p-5 text-black focus:outline-black' type="email" name='email' placeholder='Votre adresse Email' required />
  <textarea className='border-b-2 border-solid border-black bg-transparent p-5 text-black focus:outline-black' name="message" rows="7" placeholder='Votre message' required></textarea>
  <button className='bg-black text-white rounded-lg p-5 lg:w-1/3' type='submit'>Envoyer</button>
</form>
          </div>
        </div>
      </div>
    </section>
  );
}
