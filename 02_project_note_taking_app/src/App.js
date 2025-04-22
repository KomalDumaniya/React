import React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import useNotes from "./hooks/useNotes";
import useSearch from "./hooks/useSearch";
import useCategories from "./hooks/useCategories";

const App = () => {
  const { notes, dispatch, ACTIONS } = useNotes();
  const { searchTerm, setSearchTerm, filterNotes } = useSearch();
  const { category, setCategory, filterByCategory } = useCategories();

  const filteredNotes = filterByCategory(filterNotes(notes));

  return (
    <div className="max-w-xl mx-auto bg-gray-200 p-6 rounded-xl shadow-md m-4">
      <h1 className="text-2xl text-center font-bold">Notes App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <NoteForm dispatch={dispatch} ACTIONS={ACTIONS} />
      <NoteList notes={filteredNotes} dispatch={dispatch} ACTIONS={ACTIONS} />
    </div>
  );
};

export default App;
