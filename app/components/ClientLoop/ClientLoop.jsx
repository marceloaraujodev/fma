import Image from 'next/image';
import c from './ClientLoop.module.css';

export default function ClientLoop() {
  return (
    <div className={c.container}>
      <p className={c.clients}>Clients:</p>
    <div className={c.loop}>
      <Image src='/Carmen-steffens-white.png' 
        width={100}
        height={50}
        className={c.img}
        alt="Carmen Steffens logo"
      />
    </div>
    </div>
  )
}