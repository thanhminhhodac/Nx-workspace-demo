// libs
import React from 'react';

/**
 * @param {Object} props
 * @param {string} props.title
 * @returns {React.ReactElement}
 */

export const HeaderLogo = ({ title }) => {
  return (
    <div className="header-logo-wrapper">
      <div className="header-logo-wrapper-inner">
        <h1 className="header-logo-title"> {title}</h1>
      </div>
    </div>
  );
};
export default HeaderLogo;
