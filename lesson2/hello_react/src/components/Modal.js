import React from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return (
        <>
            <div className='modalBackground'>
                <div className='myModal'>
                    <button onClick={() => closeModal(false)}> X </button>
                    <h2>Hello</h2>
                    <p>Consequat ex est enim tempor labore eu ea dolore Lorem consectetur. Officia velit quis velit sit velit. Fugiat ullamco sit ea veniam id ad nulla officia in nulla. Dolor id nulla elit aliquip nostrud nisi cillum eiusmod. Mollit fugiat ad ipsum qui fugiat veniam duis dolor excepteur id nostrud. Culpa enim labore adipisicing velit laborum ipsum dolore laboris ea nisi. Occaecat amet irure ullamco esse labore anim.</p>
                </div>
            </div>
        </>
    );
};

export default Modal;