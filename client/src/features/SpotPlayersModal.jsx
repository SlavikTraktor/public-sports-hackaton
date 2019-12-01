import * as React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../common/components/Modal';

export const SpotPlayersModal = ({ toggleModal }) => {
  const playersList = useSelector(state => state.spot.playersList);

  return (
    <Modal toggleModal={toggleModal}>
      <div className="arenda-modal">
        {playersList.map((v, i) => (
          <div key={i.toString()} className="player-list-item">{v}</div>
        ))}
      </div>
    </Modal>
  );
};
