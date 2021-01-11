import React, { useState } from "react";
import "./App.css";

const testNotes = [
    {
        id: 0,
        text: "This is a test note",
        isCompleted: true,
    },
    {
        id: 1,
        text: "This is my second test note",
        isCompleted: true,
    },
];

//This is a Component in ReactJs
const Note = ({ text, isCompleted, id }) => {
    const isDone = isCompleted ? "Yes" : "No";

    return (
        <p className="note">
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

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAddnote = () => {
        const newNote = {
            id: notes.length,
            isCompleted: true,
            text,
        };

        setNote([...notes, newNote]);
    };

    const handleChangeUpdate = (e) => {
        setTextUpdate(e.target.value);
    };

    // Handles The Updating Of The Note Once An id is Submitted
    const handleUpdateNote = () => {
        let updatedList;

        const editNote = {
            id: parseInt(textUpdate),
            isCompleted: true,
            text: text,
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
      }

      deleteNote(idRemove);
      setNote(updatedList);
    }

    return (
        <div className="App">
            <div>
                <label htmlFor="idNumber">Id</label>
                <input
                    className="input"
                    id="idNumber"
                    type="number"
                    value={textUpdate}
                    onChange={handleChangeUpdate}
                />
            </div>
            <div>
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
                <button type="submit" onClick={handleNoteDelete}>Delete Note</button>
                <button type="submit" onClick={handleUpdateNote}>
                    Edit Note
                </button>
            </div>

            {notes.map(({ id, ...note }) => (
                <Note key={id} id={id} {...note} />
            ))}
        </div>
    );
}

export default App;
