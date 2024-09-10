import Session from '@/app/components/Session/Session';
import Image from 'next/image';
import c from '../page.module.css';
export default function page() {

  
  return (
    <>
      <Session>
        <div className={c.container}>
          <Image
            src="/gabriel.jpg"
            alt="Profile Pic"
            width={200}
            height={200}
            style={{ width: '300px', height: '300px' }}
            className={c.profilePic}
            />
          <h2>Gabriel Spaniol</h2>
          <div className={c.description}>

          <p>
            Desde 2006, trabalhando com E-commerce e liderando as operações da
            Carmen Steffens, um dos maiores sites de moda do país, Gabriel
            Spaniol já foi também consultor e sócio do Grupo Bruce Clay Brasil,
            um dos percursores do SEO no mundo.
          </p>

          <p>
            Atuando como consultor, Gabriel Spaniol já atuou em empresas como
            Globo.com, B2W, Americanas, Submarino, Shoptimr, Carrefour, além de
            ter publicado em sua trajetória profissional mais de 50 lojas
            virtuais utilizando as mais variadas plataformas.
          </p>

          <p>
            Nesta nova etapa, a FMA Consulting está atuando no desenvolvimento de
            novas lojas virtuais, bem como suporte e evolução de lojas
            existentes. Além disso, oferece um pacote completo que também inclui
            tráfego pago no Google, Facebook, Instagram, TikTok, utilizando das
            melhores práticas para guiar empresas no caminho do sucesso. Isso
            envolve maximização de vendas, otimização de campanhas e
            investimento de clientes que buscam vencer no mercado do varejo
            digital.
          </p>
          </div>
        </div>
      </Session>
    </>
  );
}
