import * as React from 'react';
import { SpotListItem } from '../common/components/SpotListItem';

export const SpotList = () => {
  const spot1 = {
    id: 1,
    name: 'Площадка у школы 525',
    address: 'Санкт-Петербург, ул. Гагарина, 14к1',
    sports: ['football', 'valleyball', 'basketball', 'workout'],
  };

  const spot2 = {
    id: 2,

    name: 'Площадка "Гранд Спорт"',
    address: 'Московский р-н, пр. Космонавтов, 24к2',
    sports: ['football', 'basketball', 'workout'],
  };

  const spot3 = {
    id: 3,
    name: 'Площадка на Большевиков 20',
    address: 'Невский р-н, пр. Большевиков, 20',
    sports: ['football', 'workout'],
  };

  return (
    <div className="spotList">
      <SpotListItem spot={spot1} />
      <SpotListItem spot={spot2} />
      <SpotListItem spot={spot3} />
      <SpotListItem spot={spot1} />
      <SpotListItem spot={spot2} />
      <SpotListItem spot={spot3} />
    </div>
  );
};
