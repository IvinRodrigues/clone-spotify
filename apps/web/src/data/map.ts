// [GET]artist-details/:artistId
type ArtistDetailsType = {
  name: string;
  banner: string;
  description: string;
  listeners: number;
  credits: {
    id?: number;
    name: string;
    role: string;
  }[];
  tour: {
    id: number;
    date: string;
    country: string;
    description: string;
    location: string;
  }[];
};

// [GET]lyrics/:musicId
type LyricType = {
  lyric: string;
  time: string;
};

// Necessary infos to add song to queue
type SongType = {
  id: number;
  name: string;
  duration: string;
  album: {
    id: number;
    picture: string;
  };
  author: {
    id: number;
    name: string;
  };
};

export type { ArtistDetailsType, LyricType, SongType };
