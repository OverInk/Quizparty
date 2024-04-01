import React from 'react';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_flex}>
        <img src="./img/littleLogo.svg" />
        <div className={style.footer_boxtitles}>
          <ul className={style.footer_titles}>
            <li>Главная</li>
            <li></li>
            <li>Прошедшие игры</li>
            <li>О нас</li>
          </ul>
          <div className={style.footer_media}>
            <img style={{ paddingRight: 10 }} src="./img/footer_vk.svg" />
            <img src="./img/footer_whatsapp.svg" />
          </div>
          <div className={style.footer_button}>Оставить отзыв</div>
        </div>
      </div>
      <div className={style.footer_bottom}>Политика конфиденциальности</div>
    </div>
  );
}
