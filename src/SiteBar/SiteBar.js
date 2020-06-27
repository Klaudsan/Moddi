import React from "react";
import s from './SiteBar.module.css'
import UserIcon from './../pic/user.png'
import shest from './../pic/shestern.png'
import {NavLink} from 'react-router-dom'

const SiteBar = () => {
  return (
    <div className={s.SiteBar}>
      <div className={s.icon}>
        <div className={s.photouser}>
          <img src={UserIcon} />
        </div>
        <div className={s.rang}>
          Администратор
        </div>
      </div>
      <div className={s.campany}>
        <div className={s.spisok}>
          Кампания
        </div>
        <div className={s.sel1}>
          <select className={s.sel}>
            <option>test2</option>
            <option>test3</option>
            <option>test4</option>
          </select>
        </div>
      </div>
      <div className={s.admins}>
        <div className={s.spisok}>
          Администратирование
        </div>
        <div  className={s.hov}>
          <NavLink to='/admins' className={s.podspisok}>
            <img src={shest} />
            Администраторы
          </NavLink>
        </div>
      </div>
      <div className={s.users}>
        <div className={s.spisok}>
          Пользователи
        </div>
        <div  className={s.hov}>
        <NavLink to='users' className={s.podspisok}>
        <img src={shest} />
        пользователи
        </NavLink>
        </div>
        <div  className={s.hov}>
        <NavLink to='search' className={s.podspisok}>
        <img src={shest} />
        поиск пользователя
        </NavLink>
        </div>
      </div>
      <div className={s.zayvki}>
        <div className={s.spisok}>
          Заявки
        </div>
        <div  className={s.hov}>
        <NavLink to='zayvki' className={s.podspisok}>
        <img src={shest} />
        заявки на выполнение
        </NavLink>
        </div>
      </div>
      <div className={s.zadanya}>
        <div className={s.spisok}>
          Задания
        </div>
        <div  className={s.hov}>
        <NavLink to='zadaniy' className={s.podspisok}>
        <img src={shest} />
        Задания
        </NavLink>
        </div>
      </div>
      <div className={s.campanys}>
        <div className={s.spisok}>
          Кампании
        </div>
        <div  className={s.hov}>
        <NavLink to='campani' className={s.podspisok}>
        <img src={shest} />
        Список кампании
        </NavLink>
        </div>
      </div>
        <div className={s.exit}>
          <div className={s.spisok}>
            Выход
          </div>
          <div  className={s.hov}>
          <NavLink to='' className={s.podspisok}>
          <img src={shest} />
          выход
           </NavLink>
           </div>
      </div>
    </div>
  );
};

export default SiteBar;
