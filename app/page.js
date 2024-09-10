import Form from './components/Form/Form';
import Session from './components/Session/Session';
import Hero from './components/Hero/Hero';
import Loop from './components/ClientLoop/ClientLoop';
import FmaLoop from './components/FmaLoop/FmaLoop';
import Card from './components/Card/Card';

export default function Home() {
  return (
    <>
      <Session>
        <FmaLoop />
      </Session>

      <Session>
        <Hero
          title="SEO Search Engine Optimization"
          img="/mountain_fullsize.webp"
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
              estratégias de conteúdos bem planejadas em implementadas. Nossa
              consultoria é completa e abrangente neste segmento.
            </>
          }
          btnText="Conheça"
        />
      </Session>

      <Session>
        <Hero
          title="Campanhas institucionais"
          img="/skyline_fullsize.webp"
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
              institucionais e de produtos em todos os sementos, sempre trazendo
              com nosso time o expertise e profissionalismo, bem como a estética
              que o mercado de luxo exige.
            </>
          }
          btnText="Conheça"
          className="reverse"
        />
      </Session>

      <Session>
        <Hero
          title={
            <>
              Desenvolvimento de <br />
              E-commerce:
            </>
          }
          img="/skyline_fullsize.webp"
          description={
            <>
              Com uma equipe experiente de Full Stack Developers, a fashion
              Marketing Agency está pronta para tornar seu sonho de vender
              produtos através da internet realidade. Atuamos com praticamente
              todas as principais plataformas, desenvolvendo E-commerce de moda
              e prestando serviços para quem já possui seu website.
              <br />
              <br />
              VTEX, Oracle Commerce Cloud, Sales Force, bem como plataformas de
              baixo custo que sugerimos para iniciantes neste universo. API's,
              Integrações, consultoria, configurações avançadas de websites em
              diversas plataformas são nossa especialidade.
            </>
          }
          btnText="Conheça"
        />
      </Session>

      <Session>
        <Hero
          title="Tráfego Pago"
          img="/skyline_fullsize.webp"
          className="reverse"
          description={
            <>
              Se você busca especialistas em Tráfego Pago em todas as
              plataformas do mercado, nossa agência possui vasto expertise em
              Varejo e E-commerce, desenvolvendo desde criativos até a
              realização das camapanhas na META, Google, Linkedin e TIK TOK.
              Nosso time já investiu mais de 50 milhões de reais em tráfego e
              sabe otimizar campanhas assegurando excelente ROI, resultados
              jamais vistos no mercado antes principalmente no caso do
              E-commerce de moda. 
              
              <br />
              <br />
              Gabriel Spaniol fundou o E-commerce da Carmen
              Steffens em 2006, e sempre esteve a frente do tráfego de um dos
              maiores sites de moda do país. Nosso atendimento boutique, é
              sugerido para poucos clientes de grande porte, e possui foco total
              em resultados, com profissionais senior com altíssima experiência
              atendendo todos os clientes.
            </>
          }
          btnText="Conheça"
        />
      </Session>

      <Session>
        <Form />
      </Session>
      <Session>
        <Loop />
      </Session>
      <Session>
        <Card
          img="/gabriel.jpg"
          name="Gabriel Spaniol"
          role="CEO"
          href="/members/gabriel"
          description="Desde 2006 trabalhando com E-commerce e liderando as operações
              da Carmen Steffens, um dos maiores sites de moda do país,
              Gabriel Spaniol já foi também consultor e sócio do Grupo Bruce Clay Brasil"
        />
        <Card
          img="/daniel.jpg"
          name="Daniel Burman"
          role="CEO"
          href="/members/daniel"
          description="Daniel Burman é um renomado diretor de arte, fotógrafo e filmmaker brasileiro, 
              conhecido por seu trabalho impactante nas áreas de moda e publicidade. Durante sete anos, 
              foi diretor de arte da L'Officiel "
        />
      </Session>
    </>
  );
}
