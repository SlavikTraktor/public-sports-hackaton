import * as React from 'react';
import { SportIcons } from '../common/utils/SportIcons';

export const Spot = () => (
  <div className="spotspage-body">
    <div className="top-container">
      <div className="title-block">
        <div className="text">*Spot Name*</div>
        <div className="id">id #000001</div>
      </div>
      <div className="main-block">
        <div className="item">
          Принадлежность:<span>Школа №525</span>
        </div>
        <div className="item">
          Оплата:<span>бесплатно</span>
        </div>
        <div className="item">
          Адрес:<span>Санкт-Петербург, ул. Гагарина, 24к1</span>
        </div>
        <div className="item">
          Доступные виды спорта:
          <span>
            <div className="icons">
              <SportIcons sports={['football', 'basketball']} />
            </div>
          </span>
        </div>
      </div>
    </div>
    <div className="bottom-containter">
      <div className="title">
        <div className="text">Рейтинг площадки</div>
      </div>
      <div className="blocks">
        <div className="block">
          <div className="icon">
            <SportIcons sports={['football']} />
          </div>
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
          <div className="icon">
            <SportIcons sports={['basketball']} />
          </div>
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
);