import React from "react";

function MoveButton({ id, setNotes }) {
  const onMove = (e) => {
    e.preventDefault();
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: false };
        }
        return note;
      })
    );
  };

  return (
    <button className="note-item__archive-button" onClick={onMove}>
      Pindahkan
    </button>
  );
}

export default MoveButton;
