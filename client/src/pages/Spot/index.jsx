import * as React from 'react';
import { matchPath } from 'react-router-dom';
import { FiveStarsReview } from '../../features/FiveStarsReview';
import { SportIcons } from '../../common/utils/SportIcons';
import { URLS } from '../../common/constants/constants';
import { Loader } from '../../common/components/Loader';
import { mockSpotParams, mockСommercialSpotParams } from './mockSpotParams';
import { CommentArea } from '../../common/components/CommentArea';

export const Spot = ({ location }) => {
  const [isLoader, setIsLoader] = React.useState(true);
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
      <div className="bottom-containter">
        <div className="title">
          <div className="text">Рейтинг площадки</div>
        </div>
        <div className="blocks">
          {Object.keys(spotParams.rating).map(v => (
            <FiveStarsReview raiting={spotParams.rating[v]} sport={v} onChoose={() => {}} />
          ))}
        </div>
        <CommentArea />
      </div>
    </div>
  );
};
