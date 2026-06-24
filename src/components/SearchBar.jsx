import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, selectedTalent, setSelectedTalent }) => {
  const talents = ['acting', 'dancing', 'singing', 'drawing', 'writing', 'modeling', 'makeup'];

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-box">
        <label>Filter by Talent:</label>
        <select
          value={selectedTalent}
          onChange={(e) => setSelectedTalent(e.target.value)}
          className="filter-select"
        >
          <option value="">All Talents</option>
          {talents.map(talent => (
            <option key={talent} value={talent}>
              {talent.charAt(0).toUpperCase() + talent.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
