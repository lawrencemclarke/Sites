import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './cricket-modal.css';
import closeIcon from '../assets/icon/icon-blue-close-16x16-2x.png';

export default function CricketModal(props) {
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <button className="modal-trigger" onClick={openModal}>{props.title}</button>
            <a onClick={openModal}>{props.title}</a>
            <Modal show={modalIsOpen} onHide={closeModal}>
                <Modal.Header className="cricket-modal-header">
                    <Modal.Title className="title">{props.title}</Modal.Title>
                    <Button className="modal-close-button" variant="link" onClick={closeModal}>
                        <img src={closeIcon} />
                    </Button>
                </Modal.Header>

                <Modal.Body className="cricket-modal-body">
                    <p>
                        {props.content}
                        </p>
                </Modal.Body>

                <Modal.Footer className="cricket-modal-actions" onClick={closeModal}>
                    <button className="close-btn">{props.closeBtnText}</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}




