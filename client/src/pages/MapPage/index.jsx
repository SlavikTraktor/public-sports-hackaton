import * as React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

import { Loader } from '../../common/components/Loader';
import { MapMarker } from '../../features/MapMarker';
import { mockMapMarkers } from './mockGetStatistics';

export const MapPage = () => {
  const [isLoader, setIsLoader] = React.useState(true);
  const [markers, setMarkers] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setMarkers(mockMapMarkers);

      setIsLoader(false);
    }, 1000);
  });

  if (isLoader) {
    return (
      <div className="map-page">
        <Loader maxHeight />
      </div>
    );
  }

  const saintPetersburgPosition = [59.94, 30.32];

  return (
    <div className="map-page">
      <Map className="map" center={saintPetersburgPosition} zoom={12} zoomControl={false}>
        <ZoomControl position="bottomleft" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map(v => (
          <MapMarker position={v.position} id={v.id} />
        ))}
      </Map>
    </div>
  );
};
