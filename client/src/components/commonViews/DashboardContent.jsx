import React from 'react';
import PropTypes from 'prop-types';

/**
 * DashboardContent Component
 *
 * @method DashboardContent
 *
 * @returns {Object} JSX
 *
 * @param {Object} props
 */
const DashboardContent =
  ({ children, wrapperClass, iconClass, title, subtitle }) =>
    <div className={wrapperClass}>
      <div className="bot-msg">
        <h5>
          <i className={iconClass}></i>
          &nbsp;{title}
        </h5>
        <p>{subtitle}</p>
      </div>
      <div>
        {children}
      </div>
    </div>;
DashboardContent.defaultProps = {
  wrapper: '',
  iconClass: '',
  title: '',
  subtitle: ''
};
DashboardContent.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default DashboardContent;
