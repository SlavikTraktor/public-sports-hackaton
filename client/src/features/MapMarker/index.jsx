import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';

const mockData = {
  title: 'Площадка *name*',
  id: 'id#0001',
  adress: 'школа №525',
  paramsList: ['На площадке 20 человек', 'Бесплатно', 'Есть освещение', 'Открыто круглосуточно'],
  sportTypes: ['workout', 'football', 'basketball', 'volleyball'],
};

export const MapMarker = ({ position, data = mockData }) => (
  <Marker position={position}>
    <Popup className="custom-map-marker">
      <div className="popup-title">
        <div className="title-top">
          <h3>{data.title}</h3>
          <div className="id">{data.id}</div>
        </div>
        <div className="title-bot">{data.adress}</div>
      </div>
      <div className="popup-body">
        {data.paramsList.map((v, i) => (
          <div key={i.toString()} className="popup-body-param">
            {v}
          </div>
        ))}
      </div>
      <div className="popup-footer">
        {data.paramsList.map((_, i) => (
          <div key={i.toString()} className="popup-footer-icon">
            O
          </div>
        ))}
      </div>
    </Popup>
  </Marker>
);
