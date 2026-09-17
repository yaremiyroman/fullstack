// import { } from 'react';
import { createPortal } from 'react-dom';


function Modal({ children, onClose }) {
    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: '#ccc',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{
                background: '#fff',
                padding: 50,
                position: 'relative'
            }}>
                {children}§
                <button
                    onClick={() => onClose(false)}
                    style={{
                        position: 'absolute',
                        right: 5,
                        top: 5,
                    }}
                >❌</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
