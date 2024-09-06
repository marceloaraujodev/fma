import Form from './Form/Form';
import Session from './Session/Session';
import c from './MainContent.module.css';

export default function MainContent() {
  return (
    <main className={c.content}>
      <div className={c.loopEffectContainer}>
        <div className={c.titleContainer}>
          <span className={`${c.colorEffect} ${c.gradient1}`}>Fashion.</span>
          {/* <span className={c.plainText}>Fashion.</span> */}
        </div>
        <div className={c.titleContainer}>
          <span className={`${c.colorEffect} ${c.gradient2}`}>Marketing.</span>
          {/* <span className={c.plainText} >Marketing.</span> */}
        </div>
        <div className={c.titleContainer}>
          <span className={`${c.colorEffect} ${c.gradient3}`}>Agency.</span>
          {/* <span className={c.plainText}>Agency.</span> */}
        </div>
      </div>
      {/* <Session>

      </Session> */}
 
      <Session>
        <Form />
      </Session>

    </main>
  );
}
