import React from 'react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="toast-notification-container" role="status" aria-live="polite">
      <div className="toast-content">
        <span className="toast-icon">✓</span>
        <span className="toast-message">{message}</span>
        <button 
          onClick={onClose} 
          className="toast-close-btn"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
