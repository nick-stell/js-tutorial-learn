interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // name | age

let key: PersonKeys = "name";
key = "age";
//key = "job"; error

type User = {
  _id: number;
  name: string;
  email: string;
  createAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt">; // name | email
type UserKeysNoMetaSecond = Pick<User, "name" | "email">; // name | email

let user: UserKeysNoMeta = "name";
let userSecond: UserKeysNoMetaSecond = {
  email: "g@gmail.com",
  name: "Nick"
};
