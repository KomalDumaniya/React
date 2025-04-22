import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  const categories = ["All", "Work", "Personal", "Others"];
  
  return (
    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={category} onChange={(e) => setCategory(e.target.value)}>
      {categories.map((categoryOption) => (
        <option key={categoryOption} value={categoryOption}>
          {categoryOption}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
