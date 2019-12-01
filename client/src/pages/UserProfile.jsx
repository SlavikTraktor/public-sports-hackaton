import * as React from 'react';
import { SportIcons } from '../common/utils/SportIcons';
import { Icon } from '../common/utils/Icon';
import { CommentArea } from '../common/components/CommentArea';

const posts = [
  {
    name: 'Вахтанг Руссия',
    date: '2019-11-30T02:11:23+03:00',
    text: 'Отличный день, чтобы победить на хакатоне! :)',
    likes: 12,
  },
];

export const UserProfile = () => (
  <div className="userprofile-body">
    <div className="userprofile-topblock">
      <div className="userprofile-leftblock">
        <div className="userprofile-avatar" />
      </div>
      <div className="userprofile-rightblock">
        <div className="rightblock-Name">
          Вахтанг Руссия
          <span>
            <a href="https://vk.com/vatulya">vk.com/vatulya</a>
          </span>
        </div>
        <div className="rightblock-playerid">id #01337</div>
        <div className="user-info">
          <div className="info-item">
            День рождения:
            <span>24 Июля 1998</span>
          </div>
          <div className="info-item">
            Город:
            <span>Санкт-Петербург</span>
          </div>
          <div className="info-item">
            Интересы:
            <span>
              <div className="icons">
                <SportIcons sports={['football', 'basketball']} />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="rating-row">
      <div className="edit-buttons">
        <button type="button" className="userprofile-graybutton">
          <div className="text">Сменить аватар</div>
        </button>
        <button type="button" className="userprofile-graybutton">
          <div className="text">Редактировать профиль</div>
        </button>
      </div>
      <div className="rating">
        <div className="rightblock-playerrating">Рейтинг игрока</div>
        <div className="playerrating-blocks">
          <div className="block">
            <div className="dark-block" />
            <div className="rating-icon">
              <SportIcons sports={['football']} color="#414b50" />
            </div>
            <div className="text">500</div>
          </div>
          <div className="block">
            <div className="dark-block" />
            <div className="rating-icon">
              <SportIcons sports={['basketball']} color="#414b50" />
            </div>
            <div className="text">550</div>
          </div>
        </div>
      </div>
    </div>

    <div className="userprofile-buttonsblock">
      <button type="button" className="button">
        <Icon name="pointer" color="#414b50" />
        <span>Мои места</span>
      </button>
      <button type="button" className="button">
        <Icon name="user" color="#414b50" />
        <span>Мои друзья</span>
      </button>
    </div>
    <CommentArea comments={posts} />
  </div>
);
