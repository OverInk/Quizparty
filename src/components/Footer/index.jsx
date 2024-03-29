import React from 'react';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <img src="./img/littleLogo.svg" />
        <div>
          <ul>
            <li>Главная</li>
            <li></li>
            <li>Прошедшие игры</li>
            <li>О нас</li>
          </ul>
          <div>
            <img src="./img/footer_vk.svg" />
            <img src="./img/footer_whatsapp.svg" />
          </div>
          <div>Оставить отзыв</div>
        </div>
      </div>
      <div>Политика конфиденциальности</div>
    </div>
  );
}
