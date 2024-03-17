import React from 'react';
import style from './AdditionalInfo.module.scss';

const quizs = [
  {
    title: 'День Рождения со Смузи!',
    imgURL: './img/present.svg',
    description:
      'Хотите сделать сюрприз имениннику? Представьте его чувства, когда его неожиданно поздравит ведущий, зал поаплодирует, а потом его пригласят на сцену и вручат подарок! Такой сюрприз ему еще никто не делал!',
  },
  {
    title: 'Корпоративные игры!',
    imgURL: './img/puzzle.svg',
    description:
      'Хотите отдохнуть большим коллективом так, чтобы все вспоминали тот вечер и со вздохом поговаривали:«Это было - огонь. Вот бы повторить!»? Мы сделаем это.',
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
              <p className={style.additional_text}>{quiz.description}</p>
            </div>
            <div className={style.additional_button}>
              <p>Узнать больше</p>
            </div>
          </div>
          <div>
            <img src={quiz.imgURL} alt="День рождение со Смузи" />
          </div>
        </div>
      ))}
    </div>
  );
}
