function getRandomElement(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPlaylistName(): string {
  const adjectives = [
    "Chill",
    "Happy",
    "Energetic",
    "Mellow",
    "Cool",
    "Fresh",
    "Groovy",
    "Lively",
    "Funky",
    "Smooth",
    "Vibrant",
    "Soulful",
    "Calm",
    "Relaxing",
    "Upbeat",
    "Inspiring",
    "Dreamy",
    "Epic",
    "Mystical",
    "Electrifying",
  ];

  const nouns = [
    "Vibes",
    "Tunes",
    "Beats",
    "Grooves",
    "Hits",
    "Jams",
    "Mix",
    "Rhythms",
    "Anthems",
    "Tracks",
    "Melodies",
    "Songs",
    "Playlist",
    "Collection",
    "Sounds",
    "Session",
    "Compilation",
    "Mood",
    "Symphony",
    "Harmony",
  ];

  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const playlistName = `${adjective} ${noun}`;

  return playlistName;
}

function getUsername(): string {
  const firstNames = [
    "Alex",
    "Sam",
    "Charlie",
    "Jordan",
    "Taylor",
    "Morgan",
    "Casey",
    "Drew",
    "Riley",
    "Quinn",
    "Bailey",
    "Avery",
    "Skyler",
    "Emerson",
    "Finley",
    "Harper",
    "Reese",
    "Peyton",
    "Sawyer",
    "Dakota",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
  ];

  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);

  const userName = `${firstName}${lastName}${Math.floor(Math.random() * 1000)}`;

  return userName;
}

function getBandName(): string {
  const adjectives = [
    "Electric",
    "Silent",
    "Golden",
    "Mystic",
    "Wild",
    "Dark",
    "Blazing",
    "Crimson",
    "Shining",
    "Neon",
    "Thunder",
    "Velvet",
    "Eternal",
    "Frozen",
    "Luminous",
    "Epic",
    "Whispering",
    "Glowing",
    "Radiant",
    "Starlit",
  ];

  const nouns = [
    "Waves",
    "Dreams",
    "Echoes",
    "Vibes",
    "Shadows",
    "Horizons",
    "Rebels",
    "Riders",
    "Phantoms",
    "Voyagers",
    "Lights",
    "Legends",
    "Warriors",
    "Storms",
    "Fires",
    "Giants",
    "Mysteries",
    "Hearts",
    "Dragons",
    "Sparks",
  ];

  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);

  const bandName = `${adjective} ${noun}`;

  return bandName;
}

function getRandomNumber() {
  // min and max included
  return Math.floor(Math.random() * (1000000 - 1 + 1) + 1);
}

function getPicture(): string {
  const url = `https://picsum.photos/2000/2000?random=${getRandomNumber()}`;

  return url;
}

export { getPlaylistName, getUsername, getBandName, getPicture };
