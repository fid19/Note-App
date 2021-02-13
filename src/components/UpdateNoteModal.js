import React, { useState } from "react";
import Modal from "react-modal";

export const UpdateNoteModal = ({ isOpen, onClose, onNoteUpdateClick }) => {
    //This useState is responsible for getting the id of the note and re-rendering the new update
    const [textUpdate, setTextUpdate] = useState("");

    const handleChangeUpdate = (e) => {
        setTextUpdate(e.target.value);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Update NOte Dialog"
            className="modaldial"
            overlayClassName="overlaydial"
            closeTimeoutMS={500}
        >
            <label htmlFor="updateNote">Update Note</label>
            <textarea
                className="input"
                id="textarea"
                type="text"
                value={textUpdate}
                onChange={handleChangeUpdate}
            ></textarea>
            <button type="submit" onClick={() => onNoteUpdateClick(textUpdate)}>
                Update Note
            </button>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
};
