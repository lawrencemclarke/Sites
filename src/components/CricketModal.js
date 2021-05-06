import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './cricket-modal.css';



export default function CricketModal() {
    let subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <button className='modal-trigger' onClick={openModal}>Test Title</button>
            <Modal
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 1)'
                    }
                }}
                className='content cricket-modal'
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                {/*<h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>*/}
                <p>This is never ending!</p>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}




