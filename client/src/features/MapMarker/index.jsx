import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { NavLink } from 'react-router-dom';
import { Loader } from '../../common/components/Loader';
import { activeIcon, defaultIcon } from './markerIcons';
import { mockData } from './mockData';
import { URLS } from '../../common/constants/constants';
import { SportIcons } from '../../common/utils/SportIcons';

// eslint-disable-next-line no-unused-vars
export const MapMarker = ({ position, id }) => {
  const [isLoader, setIsLoader] = React.useState(true);
  const [spotData, setSpotData] = React.useState({});
  const [icon, setIcon] = React.useState(defaultIcon);

  const onPopupOpenFirstTime = () => {
    setIcon(activeIcon);

    setTimeout(() => {
      setSpotData(mockData);

      setIsLoader(false);
    }, 500);
  };

  const onPopupClose = () => {
    setIcon(defaultIcon);
  };

  if (isLoader) {
    return (
      <Marker position={position} icon={icon}>
        <Popup onOpen={onPopupOpenFirstTime} className="custom-map-marker">
          <Loader maxHeight />
        </Popup>
      </Marker>
    );
  }

  return (
    <Marker position={position} icon={icon}>
      <Popup
        onOpen={() => setIcon(activeIcon)}
        onClose={onPopupClose}
        className="custom-map-marker"
      >
        <NavLink to={URLS.SPOT_PROFILE.replace(':id', id)}>
          <div className="popup-title">
            <div className="title-top">
              <div className="spot-name">{spotData.title}</div>
              <div className="spot-id">{spotData.id}</div>
            </div>
            <div className="title-bot">{spotData.adress}</div>
          </div>
        </NavLink>
        <div className="popup-body">
          {spotData.paramsList.map((v, i) => (
            <div key={i.toString()} className="popup-body-param">
              {v}
            </div>
          ))}
        </div>
        <div className="popup-footer">
          <SportIcons sports={spotData.sportTypes} />
        </div>
      </Popup>
    </Marker>
  );
};
