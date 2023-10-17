import React from "react";
import { showFormattedDate } from "../utils/index";
import NoteItemDetail from "./NoteItemDetail";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ setNotes, id, title, createdAt, body, archived }) {
  return (
    <div className="note-item">
      <NoteItemDetail
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <div className="note-item__action">
        <DeleteButton id={id} setNotes={setNotes} />
        {archived ? (
          <MoveButton id={id} setNotes={setNotes} />
        ) : (
          <ArchiveButton id={id} setNotes={setNotes} />
        )}
      </div>
    </div>
  );
}

export default NoteItem;
