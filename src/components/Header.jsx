import React from "react";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "rgba(255, 102, 178, 0.7)",
      padding: "20px",
      borderRadius: "15px",
      margin: "20px auto",
      maxWidth: "600px"
    }}>
      <h1 style={{ margin: 0, fontSize: "2.5rem" }}>🍓 StrawberryTunes</h1>
      <p style={{ marginTop: "5px" }}>Search your favorite songs and artists!</p>
    </header>
  );
}
