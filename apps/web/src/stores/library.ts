import { create } from "zustand";
import { PlaylistType, library } from "../data/library";

type State = {
  library: PlaylistType[];
};

const useLibraryStore = create<State>(() => ({
  library: library,
}));

export { useLibraryStore };
