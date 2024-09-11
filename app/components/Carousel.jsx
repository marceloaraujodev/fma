import c from './Carousel.module.css';

export default function Carousel() {
  return (
<div className={c.carousel}>
  <div className={c.group}>
    <div className={c.card}>A</div>
    <div className={c.card}>B</div>
    <div className={c.card}>C</div>
  </div>
  <div aria-hidden className={c.group}>
    <div className={c.card}>A</div>
    <div className={c.card}>B</div>
    <div className={c.card}>C</div>
  </div>
</div>
  )
}