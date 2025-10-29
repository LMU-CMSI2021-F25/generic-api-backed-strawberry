export async function searchMusic(term) {
  if (!term) return { results: [] };
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&limit=12`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch music");
    return res.json();
  } catch (err) {
    console.error("Error fetching from iTunes API:", err);
    throw err;
  }
}
