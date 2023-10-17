import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notes, search, setNotes }) {
  const activeNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  const archivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="note-app__body">
      <NoteInput setNotes={setNotes} />
      <h2>Catatan Aktif</h2>
      <NoteList setNotes={setNotes} notes={activeNotes} />
      <h2>Arsip</h2>
      <NoteList setNotes={setNotes} notes={archivedNotes} />
    </div>
  );
}

export default NoteBody;
