import { ArtistType } from "./home";
import { getPicture, getPlaylistName, getUsername } from "./utils";

type PlaylistType = {
  id: number;
  name: string;
  picture: string;
  pinned?: boolean;
  description?: string;
  author?: {
    id: number;
    name: string;
  };
  artists?: ArtistType[];
};

const library: PlaylistType[] = Array.from({ length: 25 }, (value, index) => ({
  id: index,
  name: getPlaylistName(),
  picture: getPicture(),
  pinned: index < 3,
  author: {
    id: index,
    name: getUsername(),
  },
}));

export type { PlaylistType };
export { library };
