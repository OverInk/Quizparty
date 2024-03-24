import React, { useState } from 'react';
import style from './Questions.module.scss';
import './../../index.scss';

const quizs = [
  {
    title: 'Что такое квиз?',
    description:
      'Представь, что ты командой играешь в «Что? Где? Когда?», перед тобой вопрос и минута на размышления, а уже в следующем туре игра превращается в «О, счастливчик» с четырьмя вариантами ответов, среди которых лишь один верный. А потом "Угадай мелодию", дальше видео-вопросы... Квиз – это сплошная динамика, азарт, сюрприз! Коктейль из интеллектуальных игр, который расширяет кругозор, делает ум гибче, острее, а круг твоих друзей шире.',
  },
  {
    title: 'Так что же меня ждёт?',
    description:
      'Семь или девять туров с разнообразными механиками - это могут быть вопросы и просто на эрудицию, и на логическую раскрутку, и в стиле «Угадай мелодию». Ведущий будет зачитывать правила каждого тура и все вопросы игры, а команды будут записывать в бланки свои ответы. За каждый верный ответ команды получают баллы. Те же, кто делает это бодрее других – забирают призы! Будут перерывы, возможность перекусить, выпить и просто поболтать с новыми знакомыми.',
  },
  {
    title: 'А какие люди здесь будут?',
    description:
      'Такие как ты. Они тоже читали эти строчки и интересовались играми. Мужчины и женщины совершенно разных возрастов, которым мало просто дома на диване посидеть за телевизором после работы. Они хотят больше – они ищут вызов, эмоции, страсть, и находят это у нас. Если ты дошёл до этого раздела, то можешь быть уверен – у нас есть твои единомышленники и в их обществе ты почувствуешь себя своим.',
  },
];

export default function Questions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.questions}>
      <h2>Часто задаваемые вопросы</h2>
      {quizs.map((quiz) => (
        //   <div className={style.additional_box}>
        //     <div>
        //       <div>
        //         <h4>{quiz.title}</h4>
        //         <p className={style.additional_text}>{quiz.description}</p>
        //       </div>
        //       <div className={style.additional_button}>
        //         <p>Узнать больше</p>
        //       </div>
        //     </div>
        //     <div>
        //       <img src={quiz.imgURL} alt="День рождение со Смузи" />
        //     </div>
        //   </div>
        <div className={style.questions_box}>
          <div className={style.questions_button}>
            <div className={style.questions_title}>{quiz.title}</div>
            <div
              className={isOpen ? 'questions_boximgActive' : 'questions_boximg'}
              onClick={() => setIsOpen(!isOpen)}>
              <img className={style.questions_img} src="./img/show_button.svg" />
            </div>
          </div>
          {isOpen && <div className={style.questions_text}>{quiz.description}</div>}
        </div>
      ))}
    </div>
  );
}
