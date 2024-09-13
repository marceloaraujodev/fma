'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import c from './Footer.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  function handleClick(type, text) {
    console.log(type);
    console.log(text);
    if (type === 'linkedin') {
      console.log('enter linkedin');
      window.location.href = 'https://www.linkedin.com';
    }
    if (type === 'phone') {
      console.log('enter phone');
      navigator.clipboard.writeText(text);
    }
    if (type === 'instagram') {
      window.open('https://www.instagram.com/');
    }
    if (type === 'message') {
      const mailtoLink = `mailto:${'atendimento@fashionmarketingagency.com.br/'}`
      window.location.href = mailtoLink;
    }
  }

  const notify = (message) => toast(message);

  async function handleSubmitNewsletter(e) {
    e.preventDefault();
    console.log(email)
    notify('Success', 'You have successfully subscribed to our newsletter');
    // try {
    //   // const response = await axios.post('/api/newsletter', { email });
    //   // console.log(response.data);
    //   notify('Success', 'You have successfully subscribed to our newsletter');
    //   // setEmail('');
    // } catch (error) {
    //   console.error(error);
    //   notify('Error', 'Failed to subscribe to our newsletter');
    // }
  }
  

  return (
    <>
      <footer className={c.footer}>

        <div className={c.dividerTop}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className={c.shapeFill}
            ></path>
          </svg>
        </div>

        <div className={c.wrapper}>
          <div className={c.skewed}></div>
          <div className={c.container}>
            <div className={c.logoImg}>
              <Image
                src="/logo2.png"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: 'auto', height: '80px' }}
                alt="logo"
                priority={true}
                className={c.img}
              />
            </div>
            <div className={c.row}>
              <div className={c.leftBox}>
                <h2>Menu</h2>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>{' '}
                    <Link href={'/'}>Home</Link>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>{' '}
                    <a href={'#agencia'}>Agência</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>{' '}
                    <a href={'#seo'}>SEO</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>{' '}
                    <a href={'#campanhas'}>Campanhas</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>{' '}
                    <a href={'#web'}>Web</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>{' '}
                    <a href={'#traffic'}>Tráfego Pago</a>
                  </li>
                </ul>
              </div>

              <div className={c.rightBox}>
                <h2>Contact</h2>

                {/* <div
                  onClick={(e) => handleClick('phone', e.target.textContent)}
                  title="copy to clipboard"
                 > 
                  <i className={`bi bi-telephone ${c.icons}`}>
                    {' '}
                    <span>55 47 9999 9999</span>
                  </i>
                </div> */}

<div
                  onClick={(e) => handleClick('message')}
                  title="Entre em contato"
                  className={c.icons}
                 >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                  </svg>
                  <span>Entre em contato</span>
                </div>

                <div
                  onClick={(e) => handleClick('instagram')}
                  title="cinstagram"
                >
                  <i className={`bi bi-instagram ${c.icons}`}>
                    {' '}
                    <span>instagram</span>
                  </i>
                </div>

                <div
                  onClick={(e) => handleClick('linkedin')}
                  title="linkedin"
                >
                  <i className={`bi bi-linkedin ${c.icons}`}>
                    {' '}
                    <span>Linkedin</span>
                  </i>
                </div>


                <div
                  onClick={(e) => handleClick('address')}
                  title="endereço"
                  className={c.icons}
                 >
                  <IoLocationOutline />
                  <span className={c.address}>Av. Brigadeiro Faria Lima, 1903 
                  - Sexto Andar</span>
                </div>
                
              </div>
              <div className={c.formContainer}>
                <h2 className={c.newsLetter}>Newsletter</h2>
                <form className={c.form} onSubmit={(e) => handleSubmitNewsletter(e)}>
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className={c.btn} type="submit">
                    Inscreva-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <ToastContainer
          hideProgressBar={true}
          autoClose={500000}
        /> */}
    </>
  );
}
