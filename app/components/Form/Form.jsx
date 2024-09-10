'use client';
import { useState } from 'react';
import axios from 'axios';
import c from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [web, setWeb] = useState(false);
  const [campanhas, setCampanhas] = useState(false);
  const [consultoria, setConsultoria] = useState(false);
  const [seo, setSeo] = useState(false);
  

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('submitting...');
    // send to server
    const userContactForm = {
      name,
      email,
      web,
      campanhas,
      consultoria,
      seo,
    }

    const res = await axios.post('/api/contact', userContactForm)
    // console.log(userContactForm)
  }

  return (
    <div className={c.container} id='form' data-offset='110'>
    <form className={c.form} onSubmit={handleSubmit} >
      <div >
        <h1>Consulte seu projeto</h1>
        <p>Agende sua consulta e saiba como podemos ajudar</p>

        <session className={c.inputFieldsCont}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className={c.input}
            name="name"
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
          />
        </session>
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
      <button type="submit">Submit</button>
    </form>

    </div>
  );
}
