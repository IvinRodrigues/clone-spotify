import { PlaylistType } from "./library";
import { getBandName, getPicture, getUsername } from "./utils";

type ArtistType = {
  id?: number;
  name: string;
  picture?: string;
};

type AuthorType = {
  id?: number;
  name: string;
};

type ItemType = {
  id: number;
  name: string;
  picture: string;
  type: "mix" | "playlist" | "artist" | "album" | "music";
  author?: AuthorType;
  artists?: ArtistType[];
  artist?: ArtistType;
};

type SectionType = {
  id: number;
  name: string;
  items: ItemType[];
};

type HomeType = {
  summary: ArtistType[];
  sections: SectionType[];
};

const home: HomeType = {
  summary: Array.from({ length: 20 }, (item, index) => ({
    id: index,
    name: getBandName(),
    picture: getPicture(),
  })),
  sections: [
    {
      id: 1,
      name: "Made for You",
      items: Array.from({ length: 7 }, (element, index) => ({
        id: index,
        name: `Daily Mix ${index + 1}`,
        picture: getPicture(),
        type: "mix",
        artists: Array.from({ length: 5 }, () => ({
          name: getBandName(),
        })),
      })),
    },
    {
      id: 2,
      name: "Cool artists",
      items: Array.from({ length: 7 }, (element, index) => ({
        id: index,
        name: getBandName(),
        picture: getPicture(),
        type: "artist",
      })),
    },
    {
      id: 3,
      name: "Cool albuns",
      items: Array.from({ length: 7 }, (element, index) => ({
        id: index,
        name: `Album name`,
        picture: getPicture(),
        type: "album",
        artist: {
          id: index,
          name: getBandName(),
        },
      })),
    },
    {
      id: 4,
      name: "Cool songs",
      items: Array.from({ length: 7 }, (element, index) => ({
        id: index,
        name: `Album name`,
        picture: getPicture(),
        type: "music",
        artist: {
          id: index,
          name: getBandName(),
        },
      })),
    },
    {
      id: 5,
      name: "Recently played",
      items: [
        ...Array.from(
          { length: 2 },
          (element, index): ItemType => ({
            id: index,
            type: "artist",
            name: getBandName(),
            picture: getPicture(),
          }),
        ),
        ...Array.from(
          { length: 2 },
          (element, index): ItemType => ({
            id: index,
            type: "playlist",
            name: getBandName(),
            picture: getPicture(),
            author: {
              id: index,
              name: getUsername(),
            },
          }),
        ),
        ...Array.from(
          { length: 2 },
          (element, index): ItemType => ({
            id: index,
            type: "mix",
            name: getBandName(),
            picture: getPicture(),
            artists: Array.from({ length: 5 }, () => ({
              name: getBandName(),
            })),
          }),
        ),
        ...Array.from(
          { length: 2 },
          (element, index): ItemType => ({
            id: index,
            type: "music",
            name: getBandName(),
            picture: getPicture(),
            artist: {
              id: index,
              name: getBandName(),
            },
          }),
        ),
      ],
    },
  ],
};

export type { ArtistType, HomeType, SectionType };
export { home };
