import Session from '@/app/components/Session/Session';
import Image from 'next/image';
import c from '../page.module.css';
export default function page() {
  return (
    <>
      <Session>
        <div className={c.container}>
          <Image
            src="/daniel.jpg"
            alt="Profile Pic"
            width={200}
            height={200}
            style={{ width: '300px', height: '300px' }}
            className={c.profilePic}
          />
          <h2>Daniel Burman</h2>
          <div className={c.description}>
          <p>
        <span className="highlight">Daniel Burman</span> é um renomado diretor
        de arte, fotógrafo e filmmaker brasileiro, conhecido por seu trabalho
        impactante nas áreas de moda e publicidade.
      </p>
      <p>
        Durante sete anos, foi diretor de arte da <em>L&apos;Officiel Brasil</em>, onde
        criou layouts visualmente cativantes que definiram a estética da revista.
        Burman também atuou como diretor de arte convidado em publicações renomadas,
        incluindo <em>Marie Claire Brasil</em> e <em>Marie Claire México</em>, <em>GQ</em>, <em>Schon</em>, e <em>W</em>.
      </p>
      <p>
        Sua visão criativa se estende à direção de campanhas de alto perfil para
        grandes marcas brasileiras, como Água de Coco, C&A, Carmen Steffens, Tania
        Bulhões, Daslu, Shoulder, Aramis, Gregory, e Dudalina, entre outras.
      </p>
      <p>
        O portfólio de Burman reflete uma combinação impecável de inovação ousada e design
        sofisticado, consolidando-o como uma figura chave nas cenas de moda, beleza e luxo no Brasil.
      </p>
          </div>
        </div>
      </Session>
    </>
  );
}
