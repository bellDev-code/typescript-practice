interface Pet {
  name: string;
  species: "cat" | "dog";
}

interface ICat extends Pet {}
interface IDog extends Pet {}

class Dog implements IDog {
  name: string;
  species: "dog" = "dog";
  constructor(name: string) {
    this.name = name;
  }
  bow() {
    console.log("Bow - Bow!!");
  }
}

class Cat implements ICat {
  name: string;
  species: "cat" = "cat";

  constructor(name: string) {
    this.name = name;
  }
}

const isDog = (pet: Pet): pet is Dog => {
  return pet.species === "dog";
};

const isDogBoolean = (pet: Pet): boolean => {
  return pet.species === "dog";
};

export const main = () => {
  const doge: Pet = new Dog("doge");
  const kozel = new Cat("kozel");

  // doge.bow(); // Error
  if (isDog(doge)) {
    doge.bow();
  }

  // if(isDogBoolean(doge)) {
  //   doge.bow();
  // }) Error
};
