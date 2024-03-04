import React from 'react';
import style from './Cards.module.scss';

const quizs = [
  {
    title:
      '27 февраля (ВТ) 20:00 (Золберг) Телеквиз: Гарри Поттер №1 [ЧЕМПИОНАТ ПО ГП. Зимний сезон 2023-2024. Игра №10].',
    imgURL: './img/product1.svg',
    price: '600 руб/чел',
    description:
      'Вас ждут аналоги телепередач: «Что? Где? Когда?», «Своя игра», «Поле чудес», «100 к 1», «Где логика?», «Слабое звено», «О, счастливчик» и, конечно же, «Угадай мелодию»! И все вопросы будут только по книгам и фильмам о Гарри Поттере!',
    place: 'Паб «Золберг» (1-й Люсиновский пер., 3Б, метро «Добрынинская»)',
  },
  {
    title: '28 февраля (СР) 20:00 (Золберг) Русский рок №5.',
    imgURL: './img/product2.svg',
    price: '700 руб/чел',
    description:
      'Совместить Караоке-квиз и Угадай мелодию и добавить дискотеку в перерывах? Можем, умеем, практикуем! Готовьтесь петь и танцевать на нашем квизе-вечеринке! ВАЖНО: игра будет длиться около 3 часов! (105 вопросов / 700 рублей с игрока)',
    place: 'Паб «Золберг» (1-й Люсиновский пер., 3Б, метро «Добрынинская»)',
  },
  {
    title: '29 февраля (ЧТ) 20:00 (Золберг) Квиз-сюрприз №1.',
    imgURL: './img/product3.svg',
    price: '600 руб/чел',
    description:
      'Мы решили ввести традицию - каждый високосный год в этот редкий день будет то, чего вы никак не ожидаете! Это будет совершенно непохожий ни на что квиз! Готовы рискнуть? ',
    place: 'Паб «Золберг» (1-й Люсиновский пер., 3Б, метро «Добрынинская»)',
  },
];

export default function Cards() {
  return (
    <div className={style.cards}>
      <img className={style.champ} src="/img/champ.svg" alt="кубок" />
      <h2>Ближайщие игры</h2>
      <div className={style.cards_fullboxs}>
        {quizs.map((quiz) => (
          <div className={style.cards_box}>
            <div>
              <img className={style.cards_imgs} src={quiz.imgURL} alt="Logo" />
            </div>
            <div>
              <div className={style.cards_info}>
                <h3>{quiz.title}</h3>
                <p>{quiz.price}</p>
                <p>{quiz.description}</p>
                <p>Место проведения:</p>
                <p className={style.last_edit}>{quiz.place}</p>
                <div>
                  <h3>Записаться на игру</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
