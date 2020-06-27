import React from "react";
import s from './Users.module.css'




const Users = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.head}>
          Пользователи
        </div>
        <div className={s.list}>
          Список пользователей пуст . . . 
        </div>
    </div>
  );
};

export default Users;
