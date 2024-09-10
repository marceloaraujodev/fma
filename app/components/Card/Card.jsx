'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link'
// import PageContent from '../components/PageContent';
import Image from 'next/image';
// import Title from '../components/Title';
import c from './Card.module.css';

export default function Card({name, role, description, img, href, delay}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>

      <div className={c.row}>
        <div className={c.containerInner}>
          <motion.section
            ref={ref}
            className={c.contentContainer}
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.3, delay: delay }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
           >
            <div className={c.photo}>
              <Image
                src={img}
                width={150}
                height={150}
                alt={'captain'}
                className={c.photo}
              />
            </div>
            <div className={c.name}>{name}</div>
            <div className={c.profession}>{role}</div>
            <div className={c.descriptionContainer}>
              <p className={c.description}>{description}</p>
              <Link href={href}><span className={c.more}>Tudo Sobre</span></Link>
            </div>
          </motion.section>
        </div>
      </div>

    </>
  );
}
