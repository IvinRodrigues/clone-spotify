const song = {
  id: 1,
  name: "Song name",
  album: {
    id: 1,
    picture:
      "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg",
  },
  artist: {
    id: 1,
    name: "Artist name",
    about: "About artist",
    monthlyListeners: 10000,
    picture: "https://i.scdn.co/image/ab6761610000e5eb0d96912fd002f4e038b4e17e",
  },
  credits: [
    {
      // the first is always the main artist
      id: 1,
      name: "Artist single name",
      role: "Composer",
    },
    {
      // no ID because the artist doesn't have a Spotify page
      name: "Artist single name",
      role: "Lyrics",
    },
  ],
  lyrics: [
    { text: "test", timeStamp: "0:10" },
    { text: "test", timeStamp: "0:15" },
    { text: "test", timeStamp: "0:20" },
    { text: "test", timeStamp: "0:25" },
  ],
  tour: [
    {
      id: 1,
      date: "02-02-2025",
      country: "Country name",
      description: "Event description",
      location: "Concert hall location",
    },
    {
      id: 2,
      date: "02-24-2025",
      country: "Country name",
      description: "Event description",
      location: "Concert hall location",
    },
  ],
};
