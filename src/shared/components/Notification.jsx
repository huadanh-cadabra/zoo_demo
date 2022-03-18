import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'rc-notification';
import "rc-notification/assets/index.css";


const showNotification = (message, title, color) => {

  Notification.newInstance({ closable:true,style: { top: 65,right: '0px',position: 'fixed'} }, notification => {
    notification.notice({
      content: <BasicNotification
        color={color}
        title={title}
        message={message}
      />,
      key: 'little',

      closable:true,
      duration:3,
      style: { top: 60, left: 'calc(100vw - 50%)' ,position: 'fixed'},
      className: `right-up support`,
    });
    setTimeout(() => {
      
    }, 500);
    
  });
};

const BasicNotification = ({
  color, title, message
}) => {
 
  return (
    <div className={`notification notification--${color}`}>
      <h5 className="notification__title bold-text">{title}</h5>
      <p className="notification__message">{message}</p>
    </div>
  );
}

BasicNotification.propTypes = {
 
  color: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

BasicNotification.defaultProps = {
  theme: { className: 'light' },
  color: 'success',
  title: '',
};

const ImageNotification = ({
  img, title, message, theme,
}) => (
  <div className={`notification notification--image notification--${theme.className}`}>
    <div className="notification__image">
      <img src={img} alt="" />
    </div>
    <h5 className="notification__title bold-text">{title}</h5>
    <p className="notification__message">{message}</p>
  </div>
);

ImageNotification.propTypes = {
 
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

ImageNotification.defaultProps = {
  title: '',
};

const FullWideNotification = ({ color, message }) => (
  <div className={`notification notification--full-wide notification--${color}`}>
    <p className="notification__message">{message}</p>
  </div>
);

FullWideNotification.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
};

FullWideNotification.defaultProps = {
  color: '',
};

export {
  BasicNotification,
  ImageNotification,
  FullWideNotification,
  showNotification,
};