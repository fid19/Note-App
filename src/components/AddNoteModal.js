import React from 'react';
import Modal from 'react-modal';

export const AddNoteModal = ({isOpen, onClickAddNote, onClickUpdateNote, handleColor, toggleModal, text, color, handleChange}) => (
    <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Note App Dialog"
                className="modaldial"
                overlayClassName="overlaydial"
                closeTimeoutMS={500}
            >
                <div className="center">
                    <label htmlFor="note">Note</label>
                    <textarea
                        className="input"
                        id="textarea"
                        type="text"
                        value={text}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" onClick={onClickAddNote}>
                        Add Note
                    </button>
                </div>
                <div>
                    <select className ='input' onChange={handleColor} value={color}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="blue">blue</option>
                    </select>
                </div>
                <button onClick={toggleModal}>Close</button>
            </Modal>
);