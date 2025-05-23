import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  function getIcon(title) {
    switch (title) {
      case 'Happy Customers':
        return <FaRegThumbsUp size={24} />;
      case 'Registered Members':
        return <MdPeople size={24} />;
      case 'Available Products':
        return <MdOutlineProductionQuantityLimits size={24} />;
      case 'Saved Trees':
        return <GiTreeDoor size={24} />;
    }
  }
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id} className={style.item}>
            <StatisticsItem title={title} total={total} icon={getIcon(title)} />
          </li>
        ))}
        {/* Варіант без деструктуризації:
        {stats.map(stat => (
          <li key={stat.id}>
            <StatisticsItem title={stat.title} total={stat.total} />
          </li>
        ))} */}
      </ul>
    </div>
  );
}
