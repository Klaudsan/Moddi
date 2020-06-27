import React from "react";
import s from './Campani.module.css'
import shest from './../../pic/shestern.png'



const Campani = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
          <div>
          Кампании
          </div>
          <div className={s.button}>
            <button>
              Добавить
            </button>
          </div>
        </div>
        <div className={s.spisok}>
          <div className={s.tabl}>
          <div className={s.name}>
              Наименование
            </div>
            <div className={s.code}>
              Промокод
            </div>
          </div>
          <div className={s.item}>
            <div className={s.user}>
              user1
            </div>
            <div className={s.codeuser}>
              qwerty
            </div>
            <div className={s.redact}>
              <img src={shest} />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.user}>
              user1
            </div>
            <div className={s.codeuser}>
              qwerty
            </div>
            <div className={s.redact}>
              <img src={shest} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Campani;
