import Card from '../components/Card/Card';
import c from './Cards.module.css'

export default function Cards() {
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
        role="Diretor de Arte"
        href="/members/daniel"
        delay={0.5}
        description="Daniel Burman é um renomado diretor de arte, fotógrafo e filmmaker brasileiro, 
              conhecido por seu trabalho impactante nas áreas de moda e publicidade. Durante sete anos, 
              foi diretor de arte da L'Officiel "
      />
      <Card
        img="/marcelo.jpg"
        name="Marcelo Araujo"
        role="CTO"
        href="/members/marcelo"
        delay={0.5}
        description="Marcelo Araújo é um Full Stack Developer com mais de 15 anos de experiência na área digital, conta também com uma rede de contatos dos melhores profissionais do país no desenvolvimento de sites, API's, Aplicativos de Iphone e Android, bem como a implementação de BACKOFFICE e todas as ferramentas necessárias para criar do zero uma operação de E-commerce em diversas plataformas como VTEX, ORACLE COMMERCE CLOUD, SALES FORCE, entre outras indicadas a clientes menores e com baixo custo para implementação. "
      />
    </div>
  );
}
