import { Car } from "./andvanced.types";

const car01: Car = {
  name: "Avantte",
  price: 3000,
  brand: "Hyndai",
  characteristics: {
    fuel: "gasoline",
    fuelEfficiency: 10,
    kind: "Sedan",
    size: {
      unit: 4,
    },
  },
};

const car02: Car = {
  name: "Ranger",
  price: 5000,
  brand: "Ford",
  characteristics: {
    fuel: "digel",
    fuelEfficiency: 20,
    kind: "SUV",
  },
};

const car03: Car = {
  name: "GR86",
  price: 7000,
  brand: "Toyota",
  characteristics: {
    fuel: "hybrid",
    fuelEfficiency: 3,
    kind: "Sports",
  },
};

const carFunc = (car: Car) => {
  switch (car.name) {
    case "Avantte":
      console.log(`${car.name}입니다. 가격은 ${car.price}이고, ${car.characteristics.size.unit}인승입니다.`);
      break;
    case "Ranger":
      console.log(`${car.name}입니다. 가격은 ${car.price}이고, ${car.characteristics.fuel}의 연료를 가지고 있습니다.`);
      break;
    case "GR86":
      console.log(`${car.name}입니다. 브랜드는 ${car.brand}입니다.`);
      break;
    default:
      throw new Error(`${car}는 존재하지 않는 타입입니다.`);
  }
};

carFunc(car01);
carFunc(car02);
carFunc(car03);
