import { create } from "zustand";
import { AnimationState } from "./types/animationStore";

export const useAnimationStore = create<AnimationState>((set) => ({
  supermanPosition: 0,
  updateSupermanPosition: (position) =>
    set(() => ({ supermanPosition: position })),
}));
