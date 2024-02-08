import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="header_title">
        <p>Главная</p>
        <p>Расписание</p>
        <p>Прошедшие игры</p>
        <p>О нас</p>
      </div>
      <div className="header_media">
        <div>
          <img src="./img/media_vk.svg" alt="Vk" />
          <img src="./img/media_whatsapp.svg" alt="WhatsApp" />
        </div>
        <div>
          <img src="./img/location.svg" alt="Location" />
          <p>Москва</p>
        </div>
      </div>
    </div>
  );
}
