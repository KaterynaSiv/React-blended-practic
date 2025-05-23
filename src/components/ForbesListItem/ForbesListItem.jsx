import style from './ForbesListItem.module.css';
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';

export default function ForbesListItem({ listItem }) {
  const { avatar, name, capital, isIncrease } = listItem;
  return (
    <>
      <img className={style.avatar} src={avatar} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>
        {capital}
        <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish size={22} /> : <FcBearish size={22} />}
      </span>
    </>
  );
}
