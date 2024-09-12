
import c from './Session.module.css';

export default function Session({children, id, className}) {
  return (
    <div className={`${c.session} ${c[className]}`} id={id}>
      {children}
    </div>
  )
}