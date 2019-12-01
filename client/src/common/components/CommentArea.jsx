import * as React from 'react';
import moment from 'moment';
import { Icon } from '../utils/Icon';

export const CommentArea = (props) => {
  const renderComments = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.comments) {
      return props.comments.map(({
        name, date, text, likes,
      }) => (
        <div className="comment">
          <div className="comment-content">
            <div className="comment-header">
              <h3 className="title">
                {name}
                <div>{moment(date).lang('ru').format('MMMM Do, hh:mm')}</div>
              </h3>
            </div>
            <div className="comment-body">{text}</div>
            <div className="separator" />
            <div className="likes">
              <div className="heart-icon" />
              <span>{likes}</span>
            </div>
          </div>
          <div className="trash-icon">
            <Icon name="trashbox" />
          </div>
        </div>
      ));
    }

    return (
      <div className="placeholder">
        Здесь еще нет записей&nbsp;
        <span>&#128532;</span>
        <br />
        Создайте первую запись&nbsp;
        <span>&#128523;</span>
      </div>
    );
  };

  return (
    <>
      <div className="create-new">
        <button type="button" className="button">
          <Icon name="create" color="#414b50" />
          <span>Новая запись</span>
        </button>
      </div>
      {renderComments()}
    </>
  );
};
