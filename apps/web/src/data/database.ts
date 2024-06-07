const database = {
  playlists: [
    {
      id: 1,
      name: "Playlist name",
      picture: "url",
      description: "coverDescription",
      author: { id: 1 },
      songs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], // referencia ao id do som
      private: false,
    },
  ],
  songs: [
    {
      id: 1,
      name: "Song name",
      plays: 1000,
      duration: 300, // em segundos
      featured: [
        { id: 1 }, // id referente a um artista já existente
        // { name: "Featured artist name without page" }, // removido porque a busca trará o nome do artista
      ],
      credits: [
        {
          id: 1, // id do artista
          role: "Role name",
        },
        {
          // caso o Artista não tenha uma página o id deverá ser vazio
          name: "Credit artist name without page",
          role: "Role name",
        },
      ],
      lyrics: [
        { lyric: "lyric", time: 10 }, // em segundos
        { lyric: "lyric", time: 15 }, // em segundos
      ],
    },
  ],
  albums: [
    {
      id: 1,
      name: "Album name",
      picture: "url",
      type: "album", // ou 'single', 'EP'
      releaseDate: "2024-01-01T00:00:00Z", // ISO 8601
      songs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], // referência ao id do som
    },
  ],
  artists: [
    {
      id: 1,
      name: "Artist name",
      picture: "url",
      banner: "url",
      listeners: 10000,
      followers: 1000,
      about: {
        description: "text",
        medias: [
          // usar sempre a primeira mídia como banner para a seção de about
          "url",
          "url",
          "url",
          "url",
        ],
      },
      albums: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], // referência ao id do álbum
      playlists: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], // referência ao id da playlist
    },
  ],
  users: [
    {
      id: 1,
      name: "User name",
      email: "mail@domain.com",
      password: "hashedPassword", // Sugestão de uso de hash para segurança
      picture: "url",
      playlists: [{ id: 1 }], // referência ao id da playlist
      likedSongs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], // referência ao id do som
      followedArtist: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], // referência ao id do artista
      playbackHistory: [
        // referência ao id da playlist, álbum ou artista
        { id: 1, type: "album", timestamp: "2024-06-07T12:00:00Z" }, // ISO 8601
        { id: 2, type: "artist", timestamp: "2024-06-07T12:05:00Z" },
        { id: 3, type: "playlist", timestamp: "2024-06-07T12:10:00Z" },
      ],
      library: [
        // referência ao id da playlist ou álbum
        { id: 1, type: "album", timestamp: "2024-06-07T12:00:00Z" },
        { id: 2, type: "playlist", timestamp: "2024-06-07T12:05:00Z" },
        { id: 3, type: "album", timestamp: "2024-06-07T12:10:00Z" },
        { id: 4, type: "playlist", timestamp: "2024-06-07T12:15:00Z" },
        { id: 5, type: "album", timestamp: "2024-06-07T12:20:00Z" },
      ],
    },
  ],
};
