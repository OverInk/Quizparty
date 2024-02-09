import React from 'react';
import style from './Header.module.scss';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_title}>
        <p>Главная</p>
        <p>Расписание</p>
        <p>Прошедшие игры</p>
        <p>О нас</p>
      </div>
      <div className={style.header_media}>
        <div>
          <img src="/img/media_vk.svg" width={30} height={30} alt="Vk" />
          <img src="/img/media_whatsapp.svg" alt="WhatsApp" />
        </div>
        <div>
          <img src="/img/location.svg" alt="Location" />
          <p>Москва</p>
        </div>
      </div>
    </div>
  );
}
