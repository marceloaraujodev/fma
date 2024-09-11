'use client';
import { useState } from 'react';
import { GiWorld } from 'react-icons/gi';
import { FaSearchDollar } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiAmpleDress } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoBusiness } from 'react-icons/io5';
import { IoStatsChartSharp } from 'react-icons/io5';
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
              <a href="#agencia">
                <li className={c.liItem}>
                  <div className={c.icon}>
                    <IoBusiness />
                  </div>
                  <div className={c.descriptionCont}>
                    <p className={c.title}>Conheça</p>
                    <p>Desenvolvimento & Manutenção </p>
                  </div>
                </li>
              </a>

              <a href="#seo">
                <li className={c.liItem}>
                  <div className={c.icon}>
                    <FaSearchDollar />
                  </div>
                  <div className={c.descriptionCont}>
                    <p className={c.title}>SEO</p>
                    <p>Search Engines Optimization </p>
                  </div>
                </li>
              </a>
              <a href="#campanhas">
                <li className={c.liItem}>
                  <div className={c.icon}>
                    <GiAmpleDress />
                  </div>
                  <div className={c.descriptionCont}>
                    <p className={c.title}>Campanhas Institucionais</p>
                    <p>Fotografia, video</p>
                  </div>
                </li>
              </a>

              <a href="#web">
                <li className={c.liItem}>
                  <div className={c.icon}>
                    <GiWorld />
                  </div>
                  <div className={c.descriptionCont}>
                    <p className={c.title}>Web</p>
                    <p>Desenvolvimento & Manutenção </p>
                  </div>
                </li>
              </a>

              <a href="#traffic">
                <li className={c.liItem}>
                  <div className={c.icon}>
                    <IoStatsChartSharp />
                  </div>
                  <div className={c.descriptionCont}>
                    <p className={c.title}>Campanhas Tráfigo pago</p>
                    <p>Campanhas de tráfigo pago</p>
                  </div>
                </li>
              </a>

              <a href="#consultoria">
                <li className={c.liItem}>
                  <div className={c.icon}>
                    <FaPeopleGroup />
                  </div>
                  <div className={c.descriptionCont}>
                    <p className={c.title}>Consultoria</p>
                    <p>Marketing, SEO, E-Commerce</p>
                  </div>
                </li>
              </a>
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
            <ul >
              <li className={c.smallMenuLi}>
                <a href="#agencia">Conheça nossa Agência</a>
              </li>
              <li className={c.smallMenuLi}>
                <a href="#seo">SEO</a>
              </li>
              <li className={c.smallMenuLi}>
                <a href="#campanhas">Campanhas</a>
              </li>
              <li className={c.smallMenuLi}>
                <a href="#web">Web</a>
              </li>
              <li className={c.smallMenuLi}>
                <a href="#traffic">Tráfego Pago</a>
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
