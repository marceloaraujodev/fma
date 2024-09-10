import Form from './Form/Form';
import Session from './Session/Session';
import Hero from './Hero/Hero';
import Loop from './ClientLoop/ClientLoop';
import FmaLoop from './FmaLoop/FmaLoop';
import Card from './Card/Card';
import c from './MainContent.module.css';

export default function MainContent() {
  return (
    <>
      <main className={c.content}>
        <Session>
          <FmaLoop />
        </Session>

        <Session>
          <Hero
            title="SEO Search Engine Optimization"
            img="/mountain_fullsize.webp"
            description={
              <>
                Mobile apps are playing an increasingly integral part in
                delivering users the best experience. We develop high
                performance mobile apps that deliver an unmatched experience for
                users around the world.
                <br />
                <br />
                Take your users digital experience to a new level with an app
                that will wow them.
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
                Mobile apps are playing an increasingly integral part in
                delivering users the best experience. We develop high
                performance mobile apps that deliver an unmatched experience for
                users around the world.
                <br />
                <br />
                Take your users digital experience to a new level with an app
                that will wow them.
              </>
            }
            btnText="Conheça"
            className="reverse"
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
            img='/gabriel.jpg'
            name="Gabriel Spaniol"
            role="CEO"
            description="Desde 2006 trabalhando com E-commerce e liderando as operações
              da Carmen Steffens, um dos maiores sites de moda do país,
              Gabriel Spaniol já foi também consultor e sócio do Grupo Bruce Clay Brasil"
          />
          <Card
            img='/daniel.jpg'
            name="Daniel Burman"
            role="CEO"
            description="Daniel Burman é um renomado diretor de arte, fotógrafo e filmmaker brasileiro, 
              conhecido por seu trabalho impactante nas áreas de moda e publicidade. Durante sete anos, 
              foi diretor de arte da L'Officiel "
          />
        </Session>
      </main>
    </>
  );
}
