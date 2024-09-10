import Image from 'next/image';
import c from './Hero.module.css';
export default function Hero({title, className, img, description, btnText, btnClick}) {
    // Dynamically combine the container class with the reverse class (if provided)
    const containerClass = `${c.container} ${className === 'reverse' ? c.reverse : ''}`;
  
  return (
    <div className={containerClass}>
      <div className={c.blockLeft}>
        <Image
          src={img}
          alt={title}
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
            <p className={c.new}>{title}</p>
            {description}
          </div>
            <a href={btnClick}>
            <button className={c.btn}>{btnText}</button>
            </a>
        </div>
      </div>
    </div>
  );
}
