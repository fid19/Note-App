import React, { useState } from "react";
import "./App.css";

const testNotes = [
    {
        id: 0,
        text: "This is a test note",
        backgroundColor: "red",
        isCompleted: true,
    },
    {
        id: 1,
        text: "This is my second test note",
        backgroundColor: "blue",
        isCompleted: true,
    },
];

//This is a Component in ReactJs
const Note = ({ text, isCompleted, id, backgroundColor }) => {
    const isDone = isCompleted ? "Yes" : "No";

    return (
        <p className="note" style={{backgroundColor}}>
            {text} isCompleted: {isDone} id: {id}
        </p>
    );
};

function App() {
    //This useState is responsible for rendering testNotes
    const [notes, setNote] = useState(testNotes);

    //This useState is responsible for adding notes
    const [text, setText] = useState("");

    //This useState is responsible for getting the id of the note and re-rendering the new update
    const [textUpdate, setTextUpdate] = useState("");

    //This useState is responsible for user choosing background color
    const [color, setColor] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAddnote = () => {
        const newNote = {
            id: notes.length,
            isCompleted: true,
            text,
            backgroundColor: color,
        };

        setNote([...notes, newNote]);
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

    const handleNoteDelete = () => {
        let updatedList;

        const idRemove = parseInt(textUpdate);

        const deleteNote = (idToRemove) => {
            updatedList = notes.filter((note) => note.id !== idToRemove);
        };

        deleteNote(idRemove);
        setNote(updatedList);
    };

    return (
        <div className="App">
            <div className="center">
                <label htmlFor="idNumber">Id</label>
                <input
                    className="input"
                    id="idNumber"
                    type="number"
                    value={textUpdate}
                    onChange={handleChangeUpdate}
                />
            </div>
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
                <button type="submit" onClick={handleNoteDelete}>
                    Delete Note
                </button>
                <button type="submit" onClick={handleUpdateNote}>
                    Edit Note
                </button>
            </div>
            {/* <div>
                <select onChange={handleColor}>
                    <option value={color}>red</option>
                    <option value={color}>green</option>
                    <option selected value={color}>
                        yellow
                    </option>
                    <option value={color}>blue</option>
                    {console.log(color)}
                </select>
            </div> */}

            {notes.map(({ id, ...note }) => (
                <Note key={id} id={id} {...note} />
            ))}
        </div>
    );
}

export default App;
