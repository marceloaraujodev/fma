import { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import Image from 'next/image';
import c from './Hero.module.css';
export default function Hero({title, className, img, description, btnText, btnClick}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px 0px' });
    // Dynamically combine the container class with the reverse class (if provided)
    const containerClass = `${c.container} ${className === 'reverse' ? c.reverse : ''}`;
  
  return (
    <div className={containerClass}>

      <motion.div 
        className={c.blockLeft}
        ref={ref}
        initial={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.5, delay: 0}}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
       >
        <Image
          src={img}
          alt={title}
          width={600}  // Arbitrary width (for Next.js optimization, but it will be controlled by CSS)
          height={400}
          className={c.img}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </motion.div>
      <div className={c.blockRight}>
        <div className={c.highContainer}>
          <div className={c.description}>
            <motion.p 
              className={c.new}
              ref={ref}
              initial={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.5, delay: 0.2}}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              >{title}</motion.p>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.5, delay: 0.2}}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              >
                {description}
              </motion.div>
          </div>
            <a href={btnClick}>
            <button className={c.btn}>{btnText}</button>
            </a>
        </div>
      </div>
    </div>
  );
}
