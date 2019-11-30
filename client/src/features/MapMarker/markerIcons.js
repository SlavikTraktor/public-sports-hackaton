import L from 'leaflet';

export const defaultIcon = L.icon({
  iconUrl: '/images/pointer.png',
  iconSize: [30, 40],
  iconAnchor: [15, 0],
});

export const activeIcon = L.icon({
  iconUrl: '/images/active-pointer.png',
  iconSize: [30, 40],
  iconAnchor: [15, 0],
});
