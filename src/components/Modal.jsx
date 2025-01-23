import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Store the current active element before opening modal
      previousActiveElement.current = document.activeElement;
      
      // Focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      // Return focus to the previous element when modal closes
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    // Cleanup function
    return () => {
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        tabIndex="-1"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <button
            type="button"
            className="close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 