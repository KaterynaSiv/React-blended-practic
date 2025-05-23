import style from './StatisticsItem.module.css';

export default function StatisticsItem({ title, total, icon }) {
  return (
    <>
      <span>{icon}</span>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
}
