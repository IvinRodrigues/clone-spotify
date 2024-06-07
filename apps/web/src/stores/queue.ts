import { create } from "zustand";
import { SongType } from "../data/map";

const songPlaceholder: SongType = {
  id: 1,
  name: "Name placeholder",
  duration: "2:00",
  album: {
    id: 1,
    picture: "https://picsum.photos/200/300?random=6669",
  },
  author: {
    id: 1,
    name: "Author placeholder",
  },
};

type State = {
  queue: SongType;
  playSong: (song: SongType) => void;
};

const useQueueStore = create<State>((set) => ({
  queue: songPlaceholder,
  playSong: (song: SongType) => {
    set({ queue: song });
  },
}));

export { useQueueStore };
