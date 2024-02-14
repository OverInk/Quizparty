import React from 'react';
import style from './Maininfo.module.scss';

export default function Maininfo() {
  return (
    <div className={style.main_background + ' ' + style.filter}>
      <div className={style.main_tablegames}>
        <div className={style.main_table}>
          <h1>
            Over-time квиз <br /> в IT{' '}
          </h1>
          <p>
            Делаем викторины по вашим любимым <br /> вселенным и не только!
          </p>
        </div>
        <button>Расписание игр</button>
      </div>
      <div>
        <img src="/img/logo.svg" alt="Logo" />
        <img src="/img/oneelem.svg" alt="one elemnt" />
        <img src="/img/twoelem.svg" alt="two element" />
      </div>
    </div>
  );
}
