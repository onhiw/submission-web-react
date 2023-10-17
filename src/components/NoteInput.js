import React from "react";
import { useState } from "react";

function NoteInput({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitNote = (e) => {
    e.preventDefault();
    if (title.length <= 50) {
      const note = {
        id: new Date().toISOString(),
        title: title,
        body: body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      setNotes((beforeNotes) => [...beforeNotes, note]);

      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={submitNote}>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {50 - title.length}
        </p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          maxLength={50}
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required
        />
        <button type="submit">Buat Catatan</button>
      </form>
    </div>
  );
}

export default NoteInput;
