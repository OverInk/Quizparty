import React from 'react';
import style from './AdditionalInfo.module.scss';

const quizs = [
  {
    title: 'День Рождения со Смузи!',
    imgURL: './img/product1.svg',
    price: '600 руб/чел',
    description:
      'Хотите сделать сюрприз имениннику? Представьте его чувства, когда его неожиданно поздравит ведущий, зал поаплодирует, а потом его пригласят на сцену и вручат подарок! Такой сюрприз ему еще никто не делал!',
    place: 'Паб «Золберг» (1-й Люсиновский пер., 3Б, метро «Добрынинская»)',
  },
  {
    title: 'Корпоративные игры!',
    imgURL: './img/product2.svg',
    price: '700 руб/чел',
    description:
      'Хотите отдохнуть большим коллективом так, чтобы все вспоминали тот вечер и со вздохом поговаривали:«Это было - огонь. Вот бы повторить!»? Мы сделаем это.',
    place: 'Паб «Золберг» (1-й Люсиновский пер., 3Б, метро «Добрынинская»)',
  },
];

export default function AdditionalInfo() {
  return (
    <div className={style.additional}>
      <h2>Что еще ждет вас со Смузи?</h2>
      {quizs.map((quiz) => (
        <div className={style.additional_box}>
          <div>
            <div>
              <h4>{quiz.title}</h4>
              <p className={style.additional_text}>
                Хотите сделать сюрприз имениннику? Представьте его чувства, когда его неожиданно
                поздравит ведущий, зал поаплодирует, а потом его пригласят на сцену и вручат
                подарок! Такой сюрприз ему еще никто не делал!
              </p>
            </div>
            <div className={style.additional_button}>
              <p>Узнать больше</p>
            </div>
          </div>
          <div>
            <img src="/img/present.svg" alt="День рождение со Смузи" />
          </div>
        </div>
      ))}
    </div>
  );
}
