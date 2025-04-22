import React, { useState } from "react";

const NoteForm = ({ dispatch, ACTIONS }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch({
      type: ACTIONS.ADD,
      payload: {text, category },
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} >

      <input className="m-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a note..." />

      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={category} onChange={(e) => setCategory(e.target.value)} >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>

      <button type="submit" className="px-4 ml-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200" >
        Add Note
      </button>
    </form>
  );

};

export default NoteForm;