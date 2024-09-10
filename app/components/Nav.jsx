'use client';
import { useState } from 'react';
import { firstobileAlt } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { FaSearchDollar } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiAmpleDress } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';

import c from './Nav.module.css';
export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={c.nav}>
      <nav className={c.navMenu}>
        <div className={c.logo}>
          <Image
            src="/logo2.png"
            width={300}
            height={100}
            style={{ width: 'auto', height: '100px' }}
            className={c.logoImg}
            alt="logo"
          />
        </div>
        <div className={c.navLinks}>
          <div className={c.service}>Serviços</div>
          <div className={c.dropDown}>
            <ul>
              <li className={c.liItem}>
                <div className={c.icon}>
                  <GiWorld />
                </div>
                <div className={c.descriptionCont}>
                  <p className={c.title}>Web</p>
                  <p>Desenvolvimento & Manutenção </p>
                </div>
              </li>

              <li className={c.liItem}>
                <div className={c.icon}>
                  <FaPeopleGroup />
                </div>
                <div className={c.descriptionCont}>
                  <p className={c.title}>Consultoria</p>
                  <p>Marketing, SEO, E-Commerce</p>
                </div>
              </li>
              <li className={c.liItem}>
                <div className={c.icon}>
                  <FaSearchDollar />
                </div>
                <div className={c.descriptionCont}>
                  <p className={c.title}>SEO</p>
                  <p>Campanhas de tráfigo pago</p>
                </div>
              </li>
              <li className={c.liItem}>
                <div className={c.icon}>
                  <GiAmpleDress />
                </div>
                <div className={c.descriptionCont}>
                  <p className={c.title}>Campanhas Publicitárias</p>
                  <p>Fotografia, video</p>
                </div>
              </li>
              {/* <li className={c.liItem}>
                <div className={c.icon}>
                <FaMobileAlt />
                </div>
                <div className={c.descriptionCont}>
                  <p className={c.title}>Mobile</p>
                  <p>Applicações para iOS & Android</p>
                </div>             
              </li> */}
            </ul>
          </div>
        </div>
        <div className={c.navLinks}>
          <span>Empresa</span>
        </div>

        <div className={c.smallMenu} onClick={handleClick}>
          <RxHamburgerMenu />
          <div
            className={`${
              showMenu
                ? c.smallMenuDropDown
                : `${c.smallMenuDropDown} ${c.hide}`
            }`}
          >
            <ul>
              <li>
                <p onClick={() => console.log('web')}>Web</p>
              </li>

              <li>
                <p>Campanhas</p>
              </li>
              <li>
                <p>Consultoria</p>
              </li>
              <li>
                <p>SEO</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={c.btnCont}>
        <a className={c.btn} href="#form">
          Contato
        </a>
      </div>
    </header>
  );
}
