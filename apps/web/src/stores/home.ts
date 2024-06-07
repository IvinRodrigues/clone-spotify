import { create } from "zustand";
import { HomeType, home } from "../data/home";

type State = {
  home: HomeType;
};

const useHomeStore = create<State>(() => ({
  home: home,
}));

export { useHomeStore };
