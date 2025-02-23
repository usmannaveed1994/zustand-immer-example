import { create } from "zustand";
import { UserState } from "./types/userStore";
import { immer } from "zustand/middleware/immer";

export const useUserStore = create<UserState>()(
  immer((set) => ({
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
      set((state) => {
        state.address.city = city;
      }),
    updateCountry: (country) =>
      set((state) => {
        state.address.country = country;
      }),
    removeFriend: (index) => {
      set((state) => {
        state.friends.splice(index, 1);
      });
    },
    updateFriendName: (friendIndex, friendName) => {
      set((state) => {
        state.friends[friendIndex].name = friendName;
      });
    },
    initFriend: () => {
      set((state) => {
        state.friends.push({ name: "", hobbies: [] });
      });
    },
    updateHobbies: (friendIndex, hobbies) => {
      set((state) => {
        state.friends[friendIndex].hobbies = hobbies;
      });
    },
  }))
);
