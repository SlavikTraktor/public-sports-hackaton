import * as React from 'react';
import { Modal } from '../common/components/Modal';

export const DonationModal = ({ toggleModal }) => {
  const [donated, setDonated] = React.useState(false);
  const [sum, setSum] = React.useState(150);

  if (donated) {
    return (
      <Modal toggleModal={toggleModal}>
        <div className="donation-modal result">Скоро здесь будет оплата</div>
      </Modal>
    );
  }

  return (
    <Modal toggleModal={toggleModal}>
      <div className="donation-modal">
        <div className="summ">
          {sum}
          &nbsp; ₽
        </div>
        <input
          type="range"
          min="100"
          max="20000"
          step="10"
          className="slider"
          onChange={e => setSum(e.target.value)}
        />
        <button
          className="donate"
          type="submit"
          onClick={() => setDonated(true)}
        >
          Пожертвовать
        </button>
      </div>
    </Modal>
  );
};
