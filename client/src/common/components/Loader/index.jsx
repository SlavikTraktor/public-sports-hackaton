import * as React from 'react';
import mergeClassNames from 'classnames';

export const Loader = (props) => {
  const { isLoading = true, maxHeight = false } = props;

  if (!isLoading) return null;

  const containerClass = mergeClassNames('loader-container', {
    'max-height': maxHeight,
  });

  return (
    <div className={containerClass}>
      <div className="loader-wrapper">
        <div className="loader" />
      </div>
    </div>
  );
};
