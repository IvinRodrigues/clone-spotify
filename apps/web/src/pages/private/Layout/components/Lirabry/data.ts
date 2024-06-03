const musics = [
  {
    artist: {
      id: 1,
      name: "Artist name",
      about: "About artist",
      monthlyListeners: 10000,
      picture:
        "https://i.scdn.co/image/ab6761610000e5eb0d96912fd002f4e038b4e17e",
    },
    music: {
      id: 1,
      name: "Music name",
      credits: [
        {
          id: 1,
          name: "Artist single name",
          role: "Composer",
          mainArtist: true,
        },
        {
          // artist without page in spotify
          name: "Artist single name",
          role: "Lyrics",
          mainArtist: false,
        },
      ],
      picture:
        "https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2021/01/957938-scaled.jpg",
    },
    tour: [
      {
        date: "02-02-2025",
        country: "Country name",
        description: "Event description",
        location: "Concert hall location",
      },
    ],
    lyrics: [{ text: "test", timeStamp: "0:10" }],
  },
];

export { musics };
