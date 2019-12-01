import * as React from 'react';
import { SportIcons } from '../common/utils/SportIcons';
import { Icon } from '../common/utils/Icon';
import { CommentArea } from '../common/components/CommentArea';

export const UserProfile = () => (
  <div className="userprofile-body">
    <div className="userprofile-topblock">
      <div className="userprofile-leftblock">
        <div className="userprofile-avatar" />
      </div>
      <div className="userprofile-rightblock">
        <div className="rightblock-Name">
          Имя Фамилия
          <span>
            <a href="vk.com/#id">vk.com/#id</a>
          </span>
        </div>
        <div className="rightblock-playerid">id #000001</div>
        <div className="user-info">
          <div className="info-item">
            День рождения:
            <span>01 января 1970</span>
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
            <div className="text">550</div>
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
    <CommentArea />
  </div>
);
