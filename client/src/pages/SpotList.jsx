import * as React from 'react';
import { SportIcons } from '../common/utils/SportIcons';
import { Icon } from '../common/utils/Icon';

export const SpotList = () => (
  <div className="spotlistblock">
    <div className="header">
      <div className="title">
      Площадка *name*
      </div>
      <div className="id">
      id#000001
      </div>
    </div>
    <div className="body">
      <div className="line">
        <Icon name="pointer" color="#414b50" />
        <div className="text">
        Московский р-н, пр. Юрия Гагарина,
          <br />
        22к4
        </div>
      </div>
      <div className="icon-panel">
        <SportIcons sports={['football', 'basketball']} color="#ffffff" />
        <SportIcons sports={['valleyball', 'workout']} color="#ffffff" />
      </div>
    </div>
  </div>
);
