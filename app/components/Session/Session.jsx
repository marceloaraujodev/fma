
import c from './Session.module.css';

export default function Session({children}) {
  return (
    <div className={c.session}>
      {children}
    </div>
  )
}