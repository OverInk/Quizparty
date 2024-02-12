import React from 'react';
import style from './Maininfo.module.scss';

export default function Maininfo() {
  return (
    <div className={style.main_background}>
      <div>
        <h1>Over-time квиз в IT </h1>
        <p>Делаем викторины по вашим любимым вселенным и не только!</p>
      </div>
      <div>
        <img src="/img/logo.svg" alt="Logo" />
        <img src="/img/oneelem.svg" alt="one elemnt" />
        <img src="/img/twoelem.svg" alt="two element" />
      </div>
    </div>
  );
}
