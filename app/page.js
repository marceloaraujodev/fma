'use client';
import Form from './components/Form/Form';
import Session from './components/Session/Session';
import Hero from './components/Hero/Hero';
import Loop from './components/ClientLoop/ClientLoop';
import FmaLoop from './components/FmaLoop/FmaLoop';
import Cards from './Cards/Cards';
import Spinner from './components/Spinner/Spinner';
import c from './homepage.module.css';

export default function Home() {
  return (
    <>
      <Session>
        <FmaLoop />
      </Session>

      <div className={c.agencia}>
        <Session id="agencia">
          <Hero
            title="Conheça Nossa Agência"
            img="/dburman.jpg"
            description={
              <>
                Somos uma agência boutique, com uma quantidade limitada de clientes, de forma a garantir qualidade excepcional de atendimento com profissionais e mentores de alto nível em cada área.                
                <br />
                <br />

                Atuamos com excelência em três importantes frentes do mercado digital, oferecendo um pacote de serviços completo que gera valor e segurança, com um leque 360º de serviços que vão desde o desenvolvimento de E-commerce, criação e produção de Campanhas publicitárias, Shootings de apoio, Mídias Sociais, Branding, Design de criativos para Tráfego Pago, e toda gestão financeira e estratégica de campanhas da Meta, Google, Linkedin, Tik Tok.
                <br />
                <br />

                Nosso trabalho é desenvolvido por especialistas que já transformaram milhões investidos em resultados extraordinários, com extrema responsabilidade, foco e transparência, utilizando técnicas exclusivas que garantem excelente ROI e uma imagem de marca consistente, relevante e úníssona.
              </>
            }
            btnText="Contato"
            btnClick="#form"
          />
        </Session>

        <Session id="seo">
          <Hero
            title="SEO Search Engine Optimization"
            img="/seo.jpg"
            description={
              <>
                Tendo como parceiro internacional o grupo Bruce Clay Inc, da
                California, a Fashion Marketing Agency atua dentro das melhores
                práticas do SEO, Search Engine Optimization, podendo desenvolver
                projetos internacionais visando bons resultados orgânicos em
                diversos idiomas.
                <br />
                <br />
                Grande parte dos resultados de SEO também vem de trabalhos
                realizados na estruturação correta de websites bem como
                estratégias de conteúdos bem planejadas e implementadas. Nossa
                consultoria é completa e abrangente neste segmento.
              </>
            }
            btnText="Contato"
            btnClick="#form"
          />
        </Session>

        <Session id="campanhas">
          <Hero
            title="Campanhas institucionais"
            img="/dburman3.jpg"
            description={
              <>
                A Fashion Marketing Agency, possui especialistas na criação de
                campanhas de moda para o segmento de luxo e através do Studio
                Burman, atende clientes de alto nível, despertando desejo e
                entregando qualidades únicas a custos extremamente viáveis para
                empresas que buscam crescer no mercado de moda, bem como no
                universo digital. Criar histórias incríveis com a estética
                perfeita é nossa especialidade.
                <br />
                <br />
                Se você deseja criar valor de marca e um posicionamento perfeito
                no mercado de luxo, agora encontrou com a Fashion Marketing
                Agency, o caminho para o Suscesso. Realizamos também campanhas
                institucionais e de produtos em todos os sementos, sempre
                trazendo com nosso time o expertise e profissionalismo, bem como
                a estética que o mercado de luxo exige.
              </>
            }
            btnText="Contato"
            className="reverse"
            btnClick="#form"
          />
        </Session>

        <Session id="web">
          <Hero
            title={
              <>
                Desenvolvimento de <br />
                E-commerce:
              </>
            }
            img="/siteCarmen.jpg"
            description={
              <>
                Com uma equipe experiente de Full Stack Developers, a fashion
                Marketing Agency está pronta para tornar seu sonho de vender
                produtos através da internet realidade. Atuamos com praticamente
                todas as principais plataformas, desenvolvendo E-commerce de
                moda e prestando serviços para quem já possui seu website.
                <br />
                <br />
                VTEX, Oracle Commerce Cloud, Sales Force, bem como plataformas
                de baixo custo que sugerimos para iniciantes neste universo.
                API&apos;s, Integrações, consultoria, configurações avançadas de
                websites em diversas plataformas são nossa especialidade.
              </>
            }
            btnText="Contato"
            btnClick="#form"
          />
        </Session>

        <Session id="traffic">
          <Hero
            title="Tráfego Pago"
            img="/growth2.jpg"
            className="reverse"
            description={
              <>
                Se você busca especialistas em tráfego pago em todas as
                plataformas do mercado, nossa agência possui vasto expertise em
                Varejo e E-commerce, desenvolvendo desde criativos até a
                realização das camapanhas na META, Google, Linkedin e TIK TOK.
                Nosso time já investiu mais de 50 milhões de reais em tráfego e
                sabe otimizar campanhas assegurando excelente ROI, resultados
                jamais vistos no mercado antes principalmente no caso do
                E-commerce de moda.
                <br />
                <br />
                Gabriel Spaniol fundou o E-commerce da Carmen Steffens em 2006,
                e sempre esteve a frente do tráfego de um dos maiores sites de
                moda do país. Nosso atendimento boutique, é sugerido para poucos
                clientes de grande porte, e possui foco total em resultados, com
                profissionais senior com altíssima experiência atendendo todos
                os clientes.
              </>
            }
            btnText="Contato"
            btnClick="#form"
          />
        </Session>

        <Session id="consultoria">
          <Hero
            title="Consultoria"
            img="/consultoria.png"
            className="reverse"
            description={
              <>
                Nossa consultoria é uma das mais completas do mercado de moda,
                nosso CEO, Gabriel Spaniol cresceu no mercado de varejo e
                expandiu a grife de sua família, a Carmen Steffens para 19
                países, implementando no grupo uma grande transformação digital,
                que tornou a marca uma referência no segmento de moda e
                franquias.
                <br />
                <br />
                Já nosso diretor de arte, Daniel Burman, possui uma carreira
                brilhante na realização de grandes campanhas de moda. Varejo,
                marketing, branding, fotografia arte, histórias que se propagam
                no universo digital com a perfeita estrutura tecnológica é o que
                somos capazes de tornar realidade.
                <br />
                <br />
                Nossa área de tecnologia é liderada por Marcelo Araújo,
                programador senior com experiência em API&apos;s, integrações de
                sistemas, desenvolvimento de E-commerce, OmniChannel, e tudo o
                que grandes varejistas precisam em sua estrutura para
                performarem em vendas. Faça uma cotação de nossos serviços!
              </>
            }
            btnText="Contato"
            btnClick="#form"
          />
        </Session>

        <Session id="influencer">
          <Hero
            title="Influencer Marketing"
            img="/influencer1.jpg"
            className="reverse"
            description={
              <>
                Se você deseja expandir seus negócios no universo digital, nossa
                equipe conta com uma rede de contatos internacional de artistas,
                modelos e influenciadores que podem contruir histórias incríveis
                para sua marca. <br /> <br />
                
                Realizamos também fashion trips para diversas
                cidades do mundo a custos jamais vistos no mercado para auxiliar
                nossos clientes na criação de conteúdos com posicionamento e
                estética de moda correta, nível altíssimo de qualidade
                fotográfica e fashion films com direção de arte da FMA. 
                <br /> <br />
                Se você deseja fazer parte deste universo da moda, faça sua cotação
                através de nossa agência e irá se surpreender com nossos
                orçamentos e resultados. Conte sua história com pessoas
                influentes através da Fashion Marketing Agency.
              </>
            }
            btnText="Contato"
            btnClick="#form"
          />
        </Session>

        <Form />

        {/* <div className={c.dividerCont}>
          <div className={c.divider}></div>
      </div> */}

        <Session>
          <Loop />
        </Session>
        <Session>
          <Cards />
        </Session>
      </div>
    </>
  );
}
