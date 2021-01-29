import React from 'react';

const DeleteComponent = (removeId) => {
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

export default DeleteComponent;