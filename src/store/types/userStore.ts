type Friend = {
  name: string;
  hobbies: string[];
};

type Address = {
  city: string;
  country: string;
};

export type UserStoreType = {
  name: string;
  age: number;
  address: Address;
  friends: Friend[];
};
