import c from './FmaLoop.module.css';
export default function FmaLoop() {
  return (
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
  )
}