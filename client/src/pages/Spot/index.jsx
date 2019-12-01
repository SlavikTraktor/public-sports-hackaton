import * as React from 'react';
import { useDispatch } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { Carousel } from '../../common/components/Carousel';
import { FiveStarsReview } from '../../features/FiveStarsReview';
import { SportIcons } from '../../common/utils/SportIcons';
import { URLS } from '../../common/constants/constants';
import { Loader } from '../../common/components/Loader';
import { mockSpotParams, mockСommercialSpotParams } from './mockSpotParams';
import { ArendaModal } from '../../features/ArendaModal';
import { CommentArea } from '../../common/components/CommentArea';
import { SpotPlayersModal } from '../../features/SpotPlayersModal';

export const Spot = ({ location }) => {
  const dispatch = useDispatch();
  const [isLoader, setIsLoader] = React.useState(true);
  const [isArendaModal, setIsArendaModal] = React.useState(false);
  const [isPlayersModal, setIsPlayersModal] = React.useState(false);
  const [spotParams, setSpotParams] = React.useState({});

  const { id } = matchPath(location.pathname, {
    path: URLS.SPOT_PROFILE,
    exact: true,
    strict: true,
  }).params;

  React.useEffect(() => {
    setTimeout(() => {
      setSpotParams(id === '2' ? mockСommercialSpotParams : mockSpotParams);

      setIsLoader(false);
    }, 1000);
  });

  if (isLoader) {
    return (
      <div className="spotspage-body">
        <Loader maxHeight />
      </div>
    );
  }

  return (
    <div className="spotspage-body">
      <div className="top-container">
        <div className="title-block">
          <div className="text">{spotParams.name}</div>
          <div className="id">{spotParams.id}</div>
        </div>
        <div className="main-block">
          <div className="item">
            Принадлежность:
            <span>{spotParams.object}</span>
          </div>
          <div className="item">
            Оплата:
            <span>{spotParams.commercial}</span>
          </div>
          <div className="item">
            Адрес:
            <span>{spotParams.adress}</span>
          </div>
          <div className="item">
            Доступные виды спорта:
            <span>
              <div className="icons">
                <SportIcons sports={spotParams.sports} />
              </div>
            </span>
          </div>
        </div>
      </div>
      {spotParams.commercial === 'платно' && (
        <div className="arenda-params">
          <button
            className="open-arenda-modal"
            type="button"
            onClick={() => setIsArendaModal(true)}
          >
            Арендовать
          </button>
          <div className="administrator-phone">
            Телефон администратора:
            <br />
            +79119199191
          </div>
        </div>
      )}
      {isArendaModal && (
        <ArendaModal toggleModal={() => setIsArendaModal(false)} />
      )}
      <div className="buttons top">
        <button className="button" type="button">
          Подписчики
        </button>
        <button
          className="button"
          type="button"
          onClick={() => setIsPlayersModal(true)}
        >
          Сейчас играют
        </button>
        {isPlayersModal && (
          <SpotPlayersModal toggleModal={() => setIsPlayersModal(false)} />
        )}
        <button className="button" type="button">
          Подписаться
        </button>
      </div>
      <div className="bottom-containter">
        <div className="title">
          <div className="text">Рейтинг площадки</div>
        </div>
        <div className="blocks">
          {Object.keys(spotParams.rating).map(v => (
            <FiveStarsReview
              raiting={spotParams.rating[v]}
              sport={v}
              onChoose={() => {}}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setIsPlayersModal(true);

              dispatch.spot.checkinMeHere('Вахтанг Руссия');
            }}
          >
            <span>&#128400;</span>
            Я здесь!
          </button>
          <button type="button">
            <span>&#127939;&#127995;</span>
            Буду здесь!
          </button>
        </div>
        {spotParams.commercial !== 'платно' && (
          <button type="button">
            <span>&#128176;</span>
            Помочь площадке
          </button>
        )}
        <button type="button">
          <span>&#127941;</span>
          Турниры
        </button>
      </div>
      <Carousel photos={spotParams.photos} />
      <CommentArea />
    </div>
  );
};
