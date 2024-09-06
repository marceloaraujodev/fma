
import c from './Session.module.css';

export default function Session({children}) {
  return (
    <session className={c.session}>
      {children}
    </session>
  )
}