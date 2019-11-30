import * as React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

import { MapMarker } from "../features/MapMarker"

export const MapPage = () => {

  const position = [51.505, -0.09];

  return (
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
      <div className="map-page">
        <Map className="map" center={position} zoom={13} zoomControl={false} >
          <ZoomControl position="bottomleft" />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapMarker position={position}/>
        </Map>
      </div>
    </>
  );
};
