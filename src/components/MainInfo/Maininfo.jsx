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
        <div className={style.button_main}>Расписание игр</div>
      </div>
      <div className={style.main_allimg}>
        <img className={style.main_imagl1} src="/img/logo.svg" alt="Logo" />
        <img className={style.main_imagl2} src="/img/oneelem.svg" alt="one elemnt" />
        <img className={style.main_imagl3} src="/img/twoelem.svg" alt="two element" />
      </div>
    </div>
  );
}
