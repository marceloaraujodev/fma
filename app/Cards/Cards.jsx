import Card from '../components/Card/Card';
import c from './Cards.module.css'

export default function () {
  return (
    <div className={c.container}>
      <Card
        img="/gabriel.jpg"
        name="Gabriel Spaniol"
        role="CEO"
        href="/members/gabriel"
        delay={0.1}
        description="Desde 2006 trabalhando com E-commerce e liderando as operações
              da Carmen Steffens, um dos maiores sites de moda do país,
              Gabriel Spaniol já foi também consultor e sócio do Grupo Bruce Clay Brasil"
      />
      <Card
        img="/daniel.jpg"
        name="Daniel Burman"
        role="CEO"
        href="/members/daniel"
        delay={0.5}
        description="Daniel Burman é um renomado diretor de arte, fotógrafo e filmmaker brasileiro, 
              conhecido por seu trabalho impactante nas áreas de moda e publicidade. Durante sete anos, 
              foi diretor de arte da L'Officiel "
      />
    </div>
  );
}
