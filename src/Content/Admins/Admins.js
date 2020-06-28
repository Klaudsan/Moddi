import React from "react";
import s from './Admins.module.css'




const Admins = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
          <div className={s.admins}>
            Администраторы
          </div>
          <div className={s.button}>
            <button >
              добавить администратора
            </button>
          </div>
        </div>
        <div className={s.spisok}>

        </div>
        <div className={s.modul }>
          модуль окно
        </div>
    </div>
  );
};

export default Admins;
