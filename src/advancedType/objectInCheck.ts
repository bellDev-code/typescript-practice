type Cat = {
  name: string;
  speices: string;
};

type Dog = {
  name: string;
  speices: string;
  bow: () => void;
};

const possibleBow = (pet: Cat | Dog) => {
  if ("bow" in pet) {
    return true;
  }
  return false;
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
  console.log(possibleBow(cat));
  console.log(possibleBow(dog));
};
