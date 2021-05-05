import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './cricket-modal.css';



export default function CricketModal({ modal: { id, title, state }, onArchiveTask, onPinTask }) {
    let subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <button className='modal-trigger' onClick={openModal}>{title}</button>
            <Modal
                className='content'
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}




