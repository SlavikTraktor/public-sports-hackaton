import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';

const mockData = {
  title: 'Площадка *name*',
  id: 'id#0001',
  adress: 'школа №525',
  paramsList: ['На площадке 20 человек', 'Бесплатно', 'Есть освещение', 'Открыто круглосуточно'],
  sportTypes: ['workout', 'football', 'basketball', 'volleyball'],
};

export const MapMarker = ({ position }) => (
  <Marker position={position}>
    <Popup className="custom-map-marker">
      <div className="popup-title">
        <div className="title-top">
          <h3>{mockData.title}</h3>
          <div className="id">{mockData.id}</div>
        </div>
        <div className="title-bot">{mockData.adress}</div>
      </div>
      <div className="popup-body">
        {mockData.paramsList.map((v, i) => (
          <div key={i.toString()} className="popup-body-param">
            {v}
          </div>
        ))}
      </div>
      <div className="popup-footer">
        {mockData.paramsList.map((_, i) => (
          <div key={i.toString()} className="popup-footer-icon">
            O
          </div>
        ))}
      </div>
    </Popup>
  </Marker>
);
