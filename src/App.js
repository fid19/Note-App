import React, { useState } from "react";
import "./App.css";
import Modal from "react-modal";
import NoteComponent from "./components/NoteComp";
import DeleteComponent from "./components/DeleteComp";
import ModalComponentS from "./components/ModalComp";

Modal.setAppElement("#root");

const testNotes = [
    {
        id: 1,
        text: "This is a test note",
        backgroundColor: "red",
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

<NoteComponent />


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [notes, setNote] = useState(testNotes);
    const [text, setText] = useState("");
    const [textUpdate, setTextUpdate] = useState("");
    const [color, setColor] = useState("");

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    <DeleteComponent />

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

    const handleColor = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
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

    console.log(notes);
    return (
        <div className="App">

            <button onClick={toggleModal}>New Note</button>
            <ModalComponentS />
            

            <div className="cardContainer">
                {notes.map(({ id, ...note }) => (
                    <NoteComponent
                        key={id}
                        id={id}
                        onNoteDelete={DeleteComponent}
                        {...note}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
