import React from "react";

function NoteHeader({ search, setSearch }) {
  return (
    <div className="note-app__header">
      <h1>Aplikasi Catatan</h1>
      <div className="note-search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Cari catatan ..."
          name="search"
        />
      </div>
    </div>
  );
}

export default NoteHeader;
