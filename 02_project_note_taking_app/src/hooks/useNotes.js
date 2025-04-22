import { useEffect, useReducer } from "react";

const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  EDIT: "EDIT",
};

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD:
      return [...state, payload];
    case ACTIONS.DELETE:
      return state.filter((note) => note.id !== payload);
    case ACTIONS.EDIT:
      return state.map((note) =>
        note.id === payload.id ? { ...note, ...payload } : note
      );
    default:
      return state;
  }
};

const useNotes = () => {
  const [notes, dispatch] = useReducer(notesReducer, [], () => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return { notes, dispatch, ACTIONS };
};

export default useNotes;
