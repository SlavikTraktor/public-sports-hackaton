import * as React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

import { MapMarker } from '../features/MapMarker';

export const MapPage = () => {
  const position = [51.505, -0.09];

  return (
    <div className="map-page">
      <Map className="map" center={position} zoom={13} zoomControl={false}>
        <ZoomControl position="bottomleft" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapMarker position={position} />
      </Map>
    </div>
  );
};
