import React from 'react';
import PropTypes from 'prop-types';
import { NotificationWrap, NotificationText } from './Notification.styled';

const Notification = ({ massage }) => {
  return (
    <NotificationWrap>
      <NotificationText>{massage}</NotificationText>
    </NotificationWrap>
  );
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default Notification;
