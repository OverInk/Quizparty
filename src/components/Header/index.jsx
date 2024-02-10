import React from 'react';
import style from './Header.module.scss';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_title}>
        <p className={style.header_chapter}>Главная</p>
        <p className={style.header_chapter}>Расписание</p>
        <p className={style.header_chapter}>Прошедшие игры</p>
        <p className={style.header_chapter}>О нас</p>
      </div>
      <div className={style.header_media}>
        <div>
          <img src="/img/media_vk.svg" alt="Vk" />
          <img src="/img/media_whatsapp.svg" alt="WhatsApp" />
        </div>
        <div className={style.header_button}>
          <img src="/img/location.svg" alt="Location" />
          <p className={style.header_button_citys}>Москва</p>
        </div>
      </div>
    </div>
  );
}
