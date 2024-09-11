'use client';
import { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import c from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('Marcelo Araujo');
  const [email, setEmail] = useState('test@example.us');
  const [web, setWeb] = useState(false);
  const [campanhas, setCampanhas] = useState(false);
  const [consultoria, setConsultoria] = useState(false);
  const [seo, setSeo] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const notify = (message) => toast(message);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    console.log('submitting...');
    // send to server
    const userContactForm = {
      name,
      email,
      web,
      campanhas,
      consultoria,
      seo,
    };
    console.log(userContactForm);
    // const res = await axios.post('/api/contact', userContactForm)
    // console.log(userContactForm)
    setIsSending(false);
    notify('Formulário enviado com sucesso!');
  }

  return (
    <div className={c.container} id="form">
      {isSending ? (
        <Spinner />
      ) : (
        <motion.form
          className={c.form}
          onSubmit={handleSubmit}
          ref={ref}
          initial={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 0.5, delay: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
         >
          <div>
            <h1>Consulte seu projeto</h1>
            <p>Agende sua consulta e saiba como podemos ajudar</p>

            <section className={c.inputFieldsCont}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className={c.input}
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={c.input}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="email"
              />
            </section>
          </div>
          <div className={c.select}>
            <p>Selecione um ou mais serviços</p>
            <div className={c.checkboxes}>
              <input
                type="checkbox"
                id="web"
                name="web"
                value="web"
                checked={web}
                onChange={(e) => setWeb(e.target.checked)}
              />
              <label htmlFor="web">Web - Desenvolvimento & E-commerce</label>
            </div>
            <div className={c.checkboxes}>
              <input
                type="checkbox"
                id="campanhas"
                name="campanhas"
                value="campanhas"
                checked={campanhas}
                onChange={(e) => setCampanhas(e.target.checked)}
              />
              <label htmlFor="campanhas">Campanhas Publicitárias</label>
            </div>

            <div className={c.checkboxes}>
              <input
                type="checkbox"
                id="consultoria"
                name="consultoria"
                value="consultoria"
                checked={consultoria}
                onChange={(e) => setConsultoria(e.target.checked)}
              />
              <label htmlFor="consultoria">Consultoria</label>
            </div>

            <div className={c.checkboxes}>
              <input
                type="checkbox"
                id="seo"
                name="seo"
                value="seo"
                checked={seo}
                onChange={(e) => setSeo(e.target.checked)}
              />
              <label htmlFor="seo">SEO</label>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </motion.form>
      )}

      <ToastContainer className="toast" />
    </div>
  );
}
