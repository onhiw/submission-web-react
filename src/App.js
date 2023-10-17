import React from "react";
import { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

import { getInitialData } from "./utils";

function App() {
  const allNote = getInitialData();
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState(allNote);

  return (
    <div className="note-app">
      <NoteHeader search={search} setSearch={setSearch} />
      <NoteBody notes={notes} search={search} setNotes={setNotes} />
    </div>
  );
}

export default App;
