import React, { useState } from "react";

const NoteItem = ({ note, dispatch, ACTIONS }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleEdit = () => {
    if (newText.trim() !== "") {
      dispatch({ type: ACTIONS.EDIT, payload: { id: note.id, text: newText } });
      setIsEditing(false);
    }
  };

  return (
    <div className="note-item m-5 flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <p className="text-gray-800 mb-2 sm:mb-0">
        <strong className="text-blue-600">{note.category}:</strong>{" "}
        {isEditing ? (
          <input value={newText} onChange={(e) => setNewText(e.target.value)} className="m-2 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        ) : (
          note.text
        )}
      </p>

      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        {isEditing ? (
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={handleEdit} >
            Save
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition" onClick={() => setIsEditing(true)} >
            Edit
          </button>
        )}
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={() => dispatch({ type: ACTIONS.DELETE, payload: note.id })} >
          Delete
        </button>
      </div>
    </div>

  );
};

export default NoteItem;
