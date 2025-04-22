import { useState } from "react";

const useCategories = () => {
  const [category, setCategory] = useState("All");

  const filterByCategory = (notes) => {
    return category === "All" ? notes : notes.filter((note) => note.category === category);
  };

  return { category, setCategory, filterByCategory };
};

export default useCategories;
