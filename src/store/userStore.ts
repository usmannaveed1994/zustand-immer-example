import { create } from "zustand";
import { UserState } from "./types/userStore";

export const useUserStore = create<UserState>((set) => ({
  name: "John",
  age: 28,
  address: {
    city: "New York",
    country: "USA",
  },
  friends: [
    {
      name: "Emily",
      hobbies: ["biking", "music", "gaming"],
    },
    {
      name: "Peter",
      hobbies: ["soccer", "gaming"],
    },
  ],
  updateName: (name) => set(() => ({ name })),
  updateAge: (age) => set(() => ({ age })),
  updateCity: (city) =>
    set((state) => ({ ...state, address: { ...state.address, city } })),
  updateCountry: (country) =>
    set((state) => ({ ...state, address: { ...state.address, country } })),
  removeFriend: (index) => {
    set((state) => {
      const newFriends = [...state.friends];
      newFriends.splice(index, 1);
      return { ...state, friends: newFriends };
    });
  },
  updateFriendName: (friendIndex, friendName) => {
    set((state) => {
      const updatedFriends = [...state.friends];
      updatedFriends[friendIndex].name = friendName;
      return { ...state, friends: updatedFriends };
    });
  },
  initFriend: () => {
    set((state) => {
      const updatedFriends = [...state.friends];
      updatedFriends.push({ name: "", hobbies: [] });
      return { ...state, friends: updatedFriends };
    });
  },
  updateHobbies: (friendIndex, hobbies) => {
    set((state) => {
      const updatedFriends = [...state.friends];
      updatedFriends[friendIndex].hobbies = hobbies;
      return { ...state, friends: updatedFriends };
    });
  },
}));
