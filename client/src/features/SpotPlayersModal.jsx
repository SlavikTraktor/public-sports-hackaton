import * as React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../common/components/Modal';
import { Icon } from '../common/utils/Icon';

export const SpotPlayersModal = ({ toggleModal }) => {
  const playersList = useSelector(state => state.spot.playersList);

  return (
    <Modal toggleModal={toggleModal}>
      <div className="spot-players-modal">
        {playersList.map((v, i) => (
          <div key={i.toString()} className="player-list-item">
            <Icon name="user" color="#fafafa" />
            <span>{v}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};
