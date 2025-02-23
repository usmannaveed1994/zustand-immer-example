type Friend = {
  name: string;
  hobbies: string[];
};

type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
  address: Address;
  friends: Friend[];
};

export type UserState = User & {
  updateName: (name: string) => void;
  updateAge: (age: number) => void;
  updateCity: (city: string) => void;
  updateCountry: (country: string) => void;
  removeFriend: (index: number) => void;
  updateFriendName: (friendIndex: number, friendName: string) => void;
  initFriend: () => void;
  updateHobbies: (friendIndex: number, hobbies: string[]) => void;
};
