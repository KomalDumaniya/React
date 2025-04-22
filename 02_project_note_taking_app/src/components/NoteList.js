import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, dispatch, ACTIONS }) => {
  return (

    <div className="note-list mt-6 space-y-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-900 italic text-xl">
          No notes found.
        </p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} dispatch={dispatch} ACTIONS={ACTIONS} />
        ))
      )}
    </div>

  );
};

export default NoteList;
