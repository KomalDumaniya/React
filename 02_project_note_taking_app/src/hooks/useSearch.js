import { useState } from "react";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterNotes = (notes) => {
    return notes.filter((note) =>
      note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return { searchTerm, setSearchTerm, filterNotes };
};

export default useSearch;
