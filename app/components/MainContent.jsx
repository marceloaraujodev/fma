
import c from './MainContent.module.css';

export default function MainContent({children}) {
  return (
    <>
      <main className={c.content}>
        {children}
      </main>
    </>
  );
}
