import Session from '@/app/components/Session/Session';
import Image from 'next/image';
import c from '../page.module.css';
export default function page() {
  return (
    <>
      <Session>
        <div className={c.container}>
          <Image
            src="/marcelo.jpg"
            alt="Profile Pic"
            width={300}
            height={300}
            style={{ width: '300px', height: '300px' }}
            sizes="100vw"
            className={c.profilePic}
          />
          <h2>Marcelo Araújo</h2>
          <div className={c.description}>
          <p>Marcelo Araújo é um desenvolvedor Full Stack experiente, com amplo domínio na implementação de sistemas, APIs e soluções tecnológicas. Ele possui uma vasta rede de contatos com alguns dos melhores profissionais do Brasil, especializados no desenvolvimento de sites, APIs, aplicativos para iPhone e Android, além da criação de backoffice e todas as ferramentas essenciais para construir operações de e-commerce do zero.</p>

          <p>Marcelo é especialista em plataformas como VTEX, Oracle Commerce Cloud e Salesforce, e também recomenda soluções personalizadas e de baixo custo para pequenos negócios, adaptando a tecnologia às necessidades de cada cliente.</p>
          
          </div>
        </div>
      </Session>
    </>
  );
}
