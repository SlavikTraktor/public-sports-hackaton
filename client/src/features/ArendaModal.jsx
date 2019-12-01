import * as React from 'react';
import margeClassNames from 'classnames';
import { Modal } from '../common/components/Modal';
import { Loader } from '../common/components/Loader';

export const ArendaModal = ({ toggleModal }) => {
  const [checkedValues, setCheckedValues] = React.useState([]);
  const [isResult, setIsResult] = React.useState(false);
  const [isLoader, setIsLoader] = React.useState(false);

  const onSubmit = () => {
    setIsLoader(true);

    setTimeout(() => {
      setIsResult(true);

      setIsLoader(false);
    }, 700);
  };

  if (isResult) {
    return (
      <Modal toggleModal={toggleModal}>
        <div className="arenda-modal">
          <div className="title">
            Почасовая аренда поля
            <div className="exit" onClick={toggleModal}>
              x
            </div>
          </div>
          <div className="body" style={{ textAlign: 'center' }}>
            Бронирование совершено, мы с вами свяжемся
          </div>
        </div>
      </Modal>
    );
  }

  if (isLoader) {
    return (
      <Modal toggleModal={toggleModal}>
        <div className="arenda-modal">
          <div className="title">
            Почасовая аренда поля
            <div className="exit" onClick={toggleModal}>
              x
            </div>
          </div>
          <div className="body">
            <Loader maxHeight />
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal toggleModal={toggleModal}>
      <div className="arenda-modal">
        <div className="title">
          Почасовая аренда поля
          <div className="exit" onClick={toggleModal}>
            x
          </div>
        </div>
        <div className="body">
          <div className="time-grid">
            {[...new Array(14)].map((_, i) => (
              <div
                key={i.toString()}
                className={margeClassNames('time', {
                  disabled: i === 5,
                  active: checkedValues.includes(i),
                })}
                onClick={() => {
                  if (checkedValues.includes(i)) {
                    setCheckedValues(checkedValues.filter(el => el !== i));
                  } else {
                    setCheckedValues([...checkedValues, i]);
                  }
                }}
              >
                {i + 9}
                :00
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          <button type="button" className="submit-btn" onClick={onSubmit}>
            Забронировать
          </button>
        </div>
      </div>
    </Modal>
  );
};
