import React from "react";

function DeleteButton({ id, setNotes }) {
  const onDelete = (e) => {
    e.preventDefault();
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
    <button className="note-item__delete-button" onClick={onDelete}>
      Delete
    </button>
  );
}

export default DeleteButton;
