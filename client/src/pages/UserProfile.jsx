import * as React from 'react';

export const UserProfile = () => (
  <>
    <header>
      <div className="wrapper">
        <nav>
          <div className="main-nav">
            <a href="/" className="nav-item active">
              Уведомления
            </a>
            <a href="/" className="nav-item">
              Подписки
            </a>
            <a href="/" className="nav-item">
              Профиль
            </a>
          </div>
          <div className="extra-nav">
            <a href="/" className="nav-map nav-icon">
              &nbsp;
            </a>
            <div className="nav-separator" />
            <a href="/" className="nav-search nav-icon">
              &nbsp;
            </a>
          </div>
        </nav>
      </div>
    </header>

    <div className="wrapper">
      <div className="userprofile-body">
        <div className="userprofile-topblock">
          <div className="userprofile-leftblock">
            <div className="userprofile-avatar" />
            <button type="button" className="userprofile-graybutton">
              <div className="text">Сменить аватар</div>
            </button>
            <button type="button" className="userprofile-graybutton">
              <div className="text">Редактировать профиль</div>
            </button>
          </div>
          <div className="userprofile-rightblock">
            <div className="rightblock-Name">Имя Фамилия</div>
            <div className="rightblock-playerid">id #000001</div>
            <div className="rightblock-playerdata">
              <div className="playerdata-leftpart">
                <div className="leftpart-item">
                  День
                  <br />
                  Рождения:
                </div>
                <div className="leftpart-item">Город:</div>
                <div className="leftpart-item">Интересы:</div>
              </div>
              <div className="playerdata-rightpart">
                <div className="rightpart-item">01 января 1970</div>
                <div className="rightpart-item">Санкт-Петербург</div>
                <div className="rightpart-item">
                  <div className="icons">
                    <div className="football-icon" />
                    <div className="basketball-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightblock-playerrating">
              <div className="playerrating-title">Рейтинг игрока</div>
            </div>
            <div className="playerrating-blocks">
              <div className="block">
                <div className="dark-block" />
                <div className="football-icon" />
                <div className="text">544</div>
              </div>
              <div className="block">
                <div className="dark-block" />
                <div className="basketball-icon" />
                <div className="text">321</div>
              </div>
            </div>
          </div>
        </div>
        <div className="userprofile-buttonsblock">
          <button type="button" className="button">
            <i className="icon" />
            Мои места
          </button>
          <button type="button" className="button">
            <i className="icon2" />
            Мои друзья
          </button>
        </div>
      </div>
    </div>
  </>
);
