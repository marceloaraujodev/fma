import Image from 'next/image';
import c from './ClientLoop.module.css';

export default function ClientLoop() {
  const images = [
    { src: "/Carmen-steffens-white.png", alt: "Carmen Steffens logo" },
    { src: "/carrefour-white.png", alt: "Carrefour logo" },
    { src: "/logo_cea-white.png", alt: "CEA logo" },
    { src: "/agua-de-coco-white.png", alt: "Agua de Coco logo" },
    
    { src: "/armazen.png", alt: "armazen" },
    { src: "/bolt.png", alt: "bolt" },
    { src: "/dafiti.png", alt: "daffiti" },
    { src: "/dta.png", alt: "dta" },
    { src: "/dudalina.png", alt: "dudalina" },
    { src: "/lemeraude.png", alt: "lemeraude" },
    { src: "/maestro.png", alt: "maestro" },
    { src: "/murau.png", alt: "murau" },
    { src: "/puccini.png", alt: "puccini" },
    { src: "/purple.png", alt: "purple" },
    { src: "/saad.png", alt: "saad" },
    { src: "/tania.png", alt: "tania" },
    { src: "/uni.png", alt: "uni" },
  ];

  // Create an array with three sets of images
  const tripleImages = [...images, ...images, ...images, ...images];

  return (
    <div className={c.container}>
      <p className={c.clients}>Clientes</p>
      <div className={c.loop}>
        {tripleImages.map((img, index) => (
          <div key={`img-${index}`} className={c.imgCont}>
            <Image
              src={img.src}
              width={100}
              height={85}
              className={c.img}
              alt={img.alt}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

