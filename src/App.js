import React, { useState } from "react";
import "./App.css";
import Modal from "react-modal";
import {PlusSquareOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';

Modal.setAppElement("#root");

const testNotes = [
    {
        id: 1,
        text: "This is a test note",
        backgroundColor: "#ff4d4f",
        isCompleted: true,
    },
    {
        id: 2,
        text: "This is my second test note",
        backgroundColor: "blue",
        isCompleted: true,
    },
];

//This is a Component in ReactJs
const Note = ({ text, isCompleted, id, backgroundColor, onNoteDelete, onNoteUpdate }) => {
    const isDone = isCompleted ? "Yes" : "No";

    return (
        <div className="card" style= {{ backgroundColor }}>
            <button type="submit" onClick={() => onNoteDelete(id)}>
                <DeleteOutlined  className='icondelete'/>
            </button>
            <button type="submit" onClick={() => onNoteUpdate(id)}>
                <EditOutlined />
            </button>
            <p className="note">
                {text} isCompleted: {isDone} id: {id}
            </p>
        </div>
    );
};

function App() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    //This useState is responsible for rendering testNotes
    const [notes, setNote] = useState(testNotes);

    //This useState is responsible for adding notes
    const [text, setText] = useState("");

    //This useState is responsible for getting the id of the note and re-rendering the new update
    const [textUpdate, setTextUpdate] = useState("");

    //This useState is responsible for user choosing background color
    const [color, setColor] = useState("");

    const handleNoteDelete = (removeId) => {
        let updatedList;

        // const idRemove = parseInt(textUpdate);

        const deleteNote = () => {
            updatedList = notes
                .filter((note) => note.id !== removeId)
                .map((note, index) => ({ ...note, id: index + 1 }));
        };

        deleteNote();
        setNote(updatedList);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAddnote = () => {
        const newNote = {
            id: notes.length + 1,
            isCompleted: true,
            text,
            backgroundColor: color,
        };

        setNote([...notes, newNote]);
        setText("");
    };

    const handleChangeUpdate = (e) => {
        setTextUpdate(e.target.value);
    };

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    // Handles The Updating Of The Note Once An id is Submitted
    const handleUpdateNote = () => {
        let updatedList;

        const editNote = {
            id: parseInt(textUpdate),
            isCompleted: true,
            text: text,
            backgroundColor: color,
        };

        const updateNote = (noteEdit) => {
            updatedList = notes.map((note) => {
                if (note.id === noteEdit.id) {
                    return {
                        ...note,
                        ...noteEdit,
                    };
                }
                return note;
            });
        };

        updateNote(editNote);
        setNote(updatedList);
    };

    return (
        <div className="App">

            <button onClick={toggleModal} className="addnote"><PlusSquareOutlined /></button>
            <Modal
                isOpen = {isOpen}
                onRequestClose={toggleModal}
                contentLabel = "Note App Dialog"
                className = "modaldial"
                overlayClassName = "overlaydial"
                closeTimeoutMS = {500}
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
                        <option value="yellow">
                            yellow
                        </option>
                        <option value="blue">blue</option>
                        {/* {console.log(color)} */}
                    </select>
                </div>
                <button onClick={toggleModal}>Close</button>
            </Modal>

            <div className="cardContainer">
                {notes.map(({ id, ...note }) => (
                    <Note
                        key={id}
                        id={id}
                        onNoteDelete={handleNoteDelete}
                        onNoteUpdate={handleUpdateNote}
                        {...note}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
