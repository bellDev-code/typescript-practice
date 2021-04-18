interface IFood {
  from: string;
  verify: () => boolean;
}

interface ICoffee {
  beans: number;
  water: number;
  milk?: number;

  make: (beans: number, water: number, milk?: number) => number;
}

class Coffee implements ICoffee, IFood {
  beans: number = 0;
  water: number = 0;
  milk: number = 0;
  from: string = "colombia";

  constructor() {}

  make(beans: number, water: number, milk?: number) {
    if (typeof milk === "number") {
      return beans + water + milk;
    }
    return beans + water;
  }

  verify() {
    console.log("coffee is verified");
    return false;
  }
}

interface IPasta {}

class Pasta implements IPasta, IFood {
  from: "Colombia" = "Colombia";
  constructor() {}

  verify() {
    console.log("pasta is verified");
    return true;
  }
}

class Car {
  constructor() {}

  run() {
    console.log("run...");
  }
}

const isVerified = (food: IFood) => {
  return food.verify();
};

// const isCoffeeVerified = (coffee: Coffee) => {
//   return coffee.verify();
// };

// const isPastaVerified = (pasta: Pasta) => {
//   return pasta.verify();
// };

export const main = () => {
  const coffee: Coffee = new Coffee();
  const pasta: Pasta = new Pasta();
  const car: Car = new Car();

  isVerified(coffee);
  isVerified(pasta);
  // isVerified(car);
};
