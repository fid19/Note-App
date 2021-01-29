import React from "react";

const NoteComponent = ({ text, isCompleted, id, backgroundColor, onNoteDelete }) => {
    const isDone = isCompleted ? "Yes" : "No";

    return (
        <div className="card" style={{ backgroundColor }}>
            <p className="note">
                {text} isCompleted: {isDone} id: {id}
            </p>
            <button type="submit" onClick={() => onNoteDelete(id)}>
                Delete Note
            </button>
        </div>
    );
};

export default NoteComponent;

