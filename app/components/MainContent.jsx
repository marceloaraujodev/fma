import Form from './Form/Form';
import Session from './Session/Session';
import Hero from './Hero/Hero';
import Loop from './ClientLoop/ClientLoop';
import FmaLoop from './FmaLoop/FmaLoop';
import c from './MainContent.module.css';

export default function MainContent() {

  return (
    <>
    <main className={c.content}>
      <Session>
        <FmaLoop />
      </Session>
      
      <Session>
        <Hero 
          title='SEO Search Engine Optimization'
          img='/mountain_fullsize.webp'
          description={<>
            Mobile apps are playing an increasingly integral part in delivering
            users the best experience. We develop high performance mobile apps
            that deliver an unmatched experience for users around the world.
            <br />
            <br />
            Take your users digital experience to a new level with an app that
            will wow them.</>}
          btnText='Conheça'
        />
      </Session>

      <Session>
        <Hero
          title='Campanhas institucionais'
          img='/skyline_fullsize.webp'
          description='
            Mobile apps are playing an increasingly integral part in delivering
            users the best experience. We develop high performance mobile apps
            that deliver an unmatched experience for users around the world.
            <br />
            <br />
            Take your users digital experience to a new level with an app that
            will wow them.'
          btnText='Conheça'
          className='reverse' 
        />
      </Session>
 
      <Session>
        <Form />
      </Session>
      <Session>
        <Loop />
      </Session>

    </main>
    </>
  );
}
