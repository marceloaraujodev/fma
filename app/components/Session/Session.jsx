
import c from './Session.module.css';

export default function Session({children, id}) {
  return (
    <div className={c.session} id={id}>
      {children}
    </div>
  )
}