import React, { useState } from "react";
import "./App.css";
import { PlusSquareOutlined } from "@ant-design/icons";
import Modal from "react-modal";
import { UpdateNoteModal } from "./components/UpdateNoteModal";
import { AddNoteModal } from "./components/AddNoteModal";
import { Note } from "./components/Note";

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

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function toggleModalUpdate() {
        setIsOpenUpdate(!isOpenUpdate);
    }

    //This useState is responsible for rendering testNotes
    const [notes, setNote] = useState(testNotes);
    const [currentlyUpdatedId, setCurrentlyUpdatedId] = useState(undefined);

    //This useState is responsible for adding notes
    const [text, setText] = useState("");

    //This useState is responsible for user choosing background color
    const [color, setColor] = useState("");

    const handleNoteDelete = (removeId) => {
        let updatedList;

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

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    // Handles The Updating Of The Note Once An id is Submitted
    const handleUpdateNote = (text, id) => {
        const editNote = {
            id,
            isCompleted: true,
            text,
            // backgroundColor: color,
        };

        const updatedList = notes.map((note) => {
            if (note.id === editNote.id) {
                return {
                    ...note,
                    ...editNote,
                };
            }
            return note;
        });

        setNote(updatedList);
        toggleModalUpdate();
        setCurrentlyUpdatedId(undefined);
    };

    return (
        <div>
            <div className="header">
                <h1>TO-DO LIST</h1>
            </div>
            <div className="App">
                <button onClick={toggleModal} className="addnote">
                    <PlusSquareOutlined />
                </button>
                <AddNoteModal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    onClickAddNote={handleAddnote}
                    handleColor={handleColor}
                    toggleModal={toggleModal}
                    text={text}
                    color={color}
                    handleChange={handleChange}
                />
                {currentlyUpdatedId && (
                    <UpdateNoteModal
                        isOpen={isOpenUpdate}
                        onClose={toggleModalUpdate}
                        onNoteUpdateClick={(text) =>
                            handleUpdateNote(text, currentlyUpdatedId)
                        }
                    />
                )}

                <div className="cardContainer ">
                    {notes.map(({ id, ...note }) => (
                        <Note
                            key={id}
                            id={id}
                            onNoteDelete={handleNoteDelete}
                            onNoteUpdate={setCurrentlyUpdatedId}
                            toggleModal={toggleModalUpdate}
                            {...note}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
