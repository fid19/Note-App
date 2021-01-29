import React from "react";

const ModalComponent = () => {
    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Note App Dialog"
        className="modaldial"
        overlayClassName="overlaydial"
        closeTimeoutMS={500}
    >
        {/* <div className="center">
                <label htmlFor="idNumber">Id</label>
                <input
                    className="input"
                    id="idNumber"
                    type="number"
                    value={textUpdate}
                    onChange={handleChangeUpdate}
                />
            </div> */}
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
            <button type="submit" onClick={handleAddnote}>
                Add Note
            </button>
            {/* <button type="submit" onClick={handleNoteDelete}>
                    Delete Note
                </button> */}
            <button type="submit" onClick={handleUpdateNote}>
                Edit Note
            </button>
        </div>
        <div>
            <select onChange={handleColor} value={color}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                {/* {console.log(color)} */}
            </select>
        </div>
        <button onClick={toggleModal}>Close</button>
    </Modal>;
};

export default ModalComponentS;