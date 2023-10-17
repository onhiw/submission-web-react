import React from "react";

function ArchiveButton({ id, setNotes }) {
  const onArchive = (e) => {
    e.preventDefault();
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: true };
        }
        return note;
      })
    );
  };

  return (
    <button className="note-item__archive-button" onClick={onArchive}>
      Arsipkan
    </button>
  );
}

export default ArchiveButton;
