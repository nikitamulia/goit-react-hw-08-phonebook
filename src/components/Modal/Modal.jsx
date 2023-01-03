import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {

useEffect(() => {
const handleKeyDown = event => {
    if (event.code === 'Escape') {
    onClose();
    }
};

window.addEventListener('keydown', handleKeyDown);

return () => {
    window.removeEventListener('keydown', handleKeyDown);
};
}, [onClose]); 

const handleBackdropClick = event => {
if (event.currentTarget === event.target) {
    onClose();
}
};

return createPortal(
    <div onClick={handleBackdropClick}>
        <div>
        {children}
        </div>
    </div>,
    modalRoot,
);
}
