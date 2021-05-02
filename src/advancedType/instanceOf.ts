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

export const main = () => {
  const doge: Pet = new Dog("doge");
  const kozel: Pet = new Cat("kozel");

  if (doge instanceof Dog) {
    doge.bow();
  }
};
