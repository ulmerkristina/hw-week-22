import React from 'react'

function Card() {
  return (
    <div className="card">

      <div className="card__top">
        <div className="card__topic">
          <p>Тема</p>
        </div>

        <div className="card__actions">
          <div className="card__add-btn">
            <button className='card__btn btn-add'></button>
          </div>

          <div className="card__change-btn">
            <button className="card__btn btn-change"/>
          </div>

          <div className="card__delete-btn">
            <button className="card__btn btn-delete"></button>
          </div>
        </div>

      </div>

      <div className="card__body">
        <div className="card__word">
          <p>Слово</p>
        </div>

        <div className="card__transcription">
          <p>Транскрипция</p>
        </div>


        <div className="card__translation">
          <p>Перевод</p>
        </div>
      </div>
      </div>
  );
}


export default Card