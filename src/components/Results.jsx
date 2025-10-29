import React from "react";

export default function Results({ data }) {
  if (!data || data.length === 0) {
    return <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>No results yet</div>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: "1.5rem",
      padding: "2rem"
    }}>
      {data.map((item) => (
        <div key={item.trackId || item.collectionId} style={{
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "15px",
          padding: "1rem",
          transition: "transform 0.3s ease"
        }}>
          <img src={item.artworkUrl100} alt={`${item.trackName || item.collectionName} artwork`} style={{ borderRadius: "10px", width: "100%" }} />
          <h3>{item.trackName || item.collectionName}</h3>
          <p>{item.artistName}</p>
          {item.previewUrl && (
            <audio controls src={item.previewUrl} style={{ width: "100%", marginTop: "10px" }}>
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
}
