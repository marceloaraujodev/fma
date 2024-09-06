import { FaMobileAlt } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaSearchDollar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiAmpleDress } from "react-icons/gi";

import c from './Nav.module.css';
export default function Nav() {
  return (
    <header className={c.nav}>
      <nav className={c.navMenu}>
        <div className={c.logo}>F.M.A </div>
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
      </nav>
      <a className={c.btn} href="#form">Contato</a>
    </header>
  );
}
