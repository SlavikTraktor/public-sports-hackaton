import * as React from 'react';
import { SpotListItem } from '../common/components/SpotListItem';

const spot1 = {
  id: 1,
  name: 'Площадка у школы 525',
  address: 'Санкт-Петербург, ул. Гагарина, 14к1',
  sports: ['football', 'valleyball', 'basketball', 'workout'],
  count: 18,
};

const spot2 = {
  id: 2,
  name: 'Площадка "Гранд Спорт"',
  address: 'Московский р-н, пр. Космонавтов, 24к2',
  sports: ['football', 'basketball', 'workout'],
  count: 13,
};

const spot3 = {
  id: 3,
  name: 'Площадка на Большевиков 20',
  address: 'Невский р-н, пр. Большевиков, 20',
  sports: ['football', 'workout'],
  count: 23,
};

const spots = [spot1, spot2, spot3, spot3, spot2, spot1];

export const SpotList = () => (
  <div className="spotList">
    {spots.map(spot => (
      <SpotListItem spot={spot} />
    ))}
  </div>
);
