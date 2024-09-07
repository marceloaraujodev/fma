import Image from 'next/image';
import c from './Hero.module.css';
export default function Hero() {
  return (
    <div className={c.container}>
      <div className={c.blockLeft}>
        <Image
          src="/mountain_fullsize.webp" 
          alt="description" 
          width={600}  // Arbitrary width (for Next.js optimization, but it will be controlled by CSS)
          height={400}
          className={c.img}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>
      <div className={c.blockRight}>
        <div className={c.highContainer}>
          <div className={c.description}>
            <p className={c.new}>Cloud native mobile apps</p>
            Mobile apps are playing an increasingly integral part in delivering
            users the best experience. We develop high performance mobile apps
            that deliver an unmatched experience for users around the world.
            <br />
            <br />
            Take your users digital experience to a new level with an app that
            will wow them.
          </div>
          <button className={c.btn}>Conheça</button>
        </div>
      </div>
    </div>
  );
}
