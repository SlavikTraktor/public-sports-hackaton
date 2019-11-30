import * as React from 'react';

export const SpotsPage = () => (
  <div className="wrapper">
    <div className="spotspage-body">
      <div className="top-container">
        <div className="title-block">
          <div className="text">*Spot Name*</div>
          <div className="id">id #000001</div>
        </div>
        <div className="main-block">
          <div className="left-column">
            <div className="item">
              Принадлежность:
            </div>
            <div className="item">Оплата:</div>
            <div className="item">Адрес:</div>
            <div className="item">
            Доступные виды
              <br />
            спорта:
            </div>
          </div>
          <div className="right-column">
            <div className="item">Школа №525</div>
            <div className="item">бесплатно</div>
            <div className="item">Санкт-Петербург, ул. Гагарина, 24к1</div>
            <div className="item">
              <div className="icons">
                <div className="football-icon" />
                <div className="basketball-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-containter">
        <div className="title">
          <div className="text">Рейтинг площадки</div>
        </div>
        <div className="blocks">
          <div className="block">
            <div className="football-icon" />
            <div className="five-stars">
              <div className="star-icon" />
              <div className="star-icon" />
              <div className="star-icon" />
              <div className="star-icon" />
              <div className="star-icon" />
            </div>
            <div className="text">4.5</div>
          </div>
          <div className="block">
            <div className="basketball-icon" />
            <div className="five-stars">
              <div className="star-icon" />
              <div className="star-icon" />
              <div className="star-icon" />
              <div className="star-icon" />
              <div className="star-icon" />
            </div>
            <div className="text">4.1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
