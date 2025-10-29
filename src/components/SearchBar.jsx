import React from "react";

export default function SearchBar({ value, onChange, onSearch, loading }) {
  return (
    <div className="search">
      <label htmlFor="searchInput" className="visually-hidden">Search</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Type artist or song..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch} disabled={loading || !value.trim()}>
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}