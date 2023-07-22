function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
  const album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Making three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // Example with the number of tracks
const album3 = make_album("Artist3", "Album Title 3", 8);

// Printing each return value to show the album information
console.log(album1);
console.log(album2);
console.log(album3);
