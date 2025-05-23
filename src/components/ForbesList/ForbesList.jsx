import style from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';

export default function ForbesList({ list }) {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {list.map(item => (
          <li key={item.id} className={style.item}>
            <ForbesListItem listItem={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
