import React from "react";
import s from './Zayvki.module.css'




const Zayvki = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
          Заявки на выполнение
        </div>
          <div className={s.content}> 
        <div className={s.state}>
          <div className={s.status}>
            Статус
          </div>
          <div className={s.sel}>
          <select>
            <option>
              Все
            </option>
            <option>
              Модерация
            </option>
            <option>
              Принято
            </option>
            <option selected>
              Отклонено
            </option>
            <option>
              Тест
            </option>
          </select>
          </div>
       </div>
        <div className={s.col}>
          <div className={s.colzav}>
            Количество заявок на странице
          </div>
          <div>
            <select>
              <option>10</option>
              <option>25</option>
              <option selected>50</option>
            </select>
          </div>
        </div>
          </div>
        <div className={s.spisok}>
          Список заданий пуст . . .
        </div>
        </div>
  );
};

export default Zayvki;
