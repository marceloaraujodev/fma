import Image from 'next/image';
import c from './ClientLoop.module.css';

export default function ClientLoop() {
  return (
    <div className={c.container}>
      <p className={c.clients}>Clients:</p>
    <div className={c.loop}>
      <div className={c.x}>
      <Image src='/Carmen-steffens-white.png' 
        width={100}
        height={85}
        className={c.img}
        alt="Carmen Steffens logo"
        // style={{width: 'auto', height: 'auto'}}
      />
      </div>

      <div className={c.x}>
      <Image src='/carrefour-white.png' 
        width={100}
        height={100}
        className={c.img}
        alt="Carmen Steffens logo"
        style={{width: 'auto', height: 'auto'}}
      />
      </div>
      <div className={c.x}>
      <Image src='/logo_cea-white.png' 
        width={100}
        height={85}
        className={c.img}
        alt="Carmen Steffens logo"
        style={{width: 'auto', height: 'auto'}}
      />
      </div>
      <div className={c.x}>
      <Image src='/agua-de-coco-white.png' 
        width={100}
        height={85}
        className={c.img}
        alt="agua de coco logo"
        style={{width: 'auto', height: 'auto'}}
      />
      </div>

    </div>
    </div>
  )
}