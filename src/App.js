import React, { useState } from "react";
import { searchMusic } from "./api/api";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!term) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchMusic(term);
      setResults(data.results);
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(to bottom right, #ff4da6, #ffccff)",
      color: "#fff",
      minHeight: "100vh",
      textAlign: "center",
      padding: "20px"
    }}>
      <Header />
      <form onSubmit={handleSearch} style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a song or artist..."
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            width: "60%",
            maxWidth: "300px"
          }}
        />
        <button type="submit" style={{
          padding: "10px 15px",
          marginLeft: "10px",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#ff66b2",
          color: "white",
          cursor: "pointer"
        }}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <Results data={results} />
    </div>
  );
}

export default App;

