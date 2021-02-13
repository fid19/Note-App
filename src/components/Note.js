import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import logo from "../images/logo192.png";

//This is a Component in ReactJs
// TODO move into separate file
export const Note = ({
    text,
    isCompleted,
    id,
    backgroundColor,
    onNoteDelete,
    onNoteUpdate,
    toggleModal,
}) => {
    const isDone = isCompleted ? "Yes" : "No";

    return (
        <div className="card fade-in" style={{ backgroundColor }}>
            <img src={logo} alt="Logo" />
            <button
                type="submit"
                className="icon"
                onClick={() => onNoteDelete(id)}
            >
                <DeleteOutlined />
            </button>

            <button
                type="submit"
                className="icon"
                onClick={() => {
                    onNoteUpdate(id);
                    toggleModal();
                }}
            >
                <EditOutlined />
            </button>
            <p className="note">
                {text} isCompleted: {isDone} id: {id}
            </p>
        </div>
    );
};
