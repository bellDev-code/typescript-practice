type Cat = {
  name: string;
  speices: string;
};

type Dog = {
  name: string;
  speices: string;
  bow: () => void;
};

const getPet = (pet: Cat | Dog) => {
  (pet as Dog).bow();
  return pet as Cat;
};

export const main = () => {
  const cat: Cat = {
    name: "blang",
    speices: "ameshort",
  };
  const dog: Dog = {
    name: "youngdo",
    speices: "pome",
    bow: () => null,
  };
  // getPet(cat);
  const pet = getPet(dog);
  console.log(pet);
};
