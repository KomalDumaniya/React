import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { data } from '../data';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('q') || '';

    const results = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    const handleClearSearch = () => {
        navigate('/');
    };

    return (
        <div className="p-4">
            <h2 className="text-xl mb-2">Results for "{query}"</h2>

            <button onClick={handleClearSearch} className="mb-4 bg-blue-600 text-white px-3 py-1 rounded">
                Clear Search
            </button>

            {results.length > 0 ? (
                <ul className="list-disc list-inside">
                    {results.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;