import React from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  return (
    <div className="toast">
      <div className="toast-content">
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default Toast;
