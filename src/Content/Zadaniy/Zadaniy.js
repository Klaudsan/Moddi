import React from "react";
import s from './Zadaniy.module.css'




const Zadaniy = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
          <div>
          Задания
          </div>
          <div className={s.button}>
            <button>
              Добавить задание
            </button>
          </div>
        </div>
        <div className={s.list}>
          Список заданий пусть . . .
        </div>
    </div>
  );
};

export default Zadaniy;
