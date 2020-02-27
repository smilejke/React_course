import nanoid from "nanoid";

const staff = [
  {
    name: "John",
    contract: true,
    position: "Middle Front-end developer",
    id: nanoid()
  },
  {
    name: "Bill",
    contract: false,
    position: "Junior Front-end developer",
    id: nanoid()
  },
  {
    name: "Edward",
    contract: true,
    position: "Senior Front-end developer",
    id: nanoid()
  },
  {
    name: "Eve",
    contract: false,
    position: "Junior Front-end developer",
    id: nanoid()
  }
];

export default staff;
