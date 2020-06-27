import React from "react";
import s from './Search.module.css'




const  Search = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
          Поиск
        </div>
        <div className={s.search}>
          <div className={s.pochta}>
            Почта:
          </div>
          <input placeholder='почта' />
          <div className={s.button}>
            <button>
              найти
            </button>
          </div>
        </div>
    </div>
  );
};

export default Search;
