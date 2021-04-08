import { Car } from "./advanced.types";

const car1: Car = {
  name: "Tucson",
  brand: "Hyndai",
  price: 2400,
  variety: "SUV",
  feature: {
    fuel: "Gasoline",
    engin: "180hp",
    exhaust: 1600,
  },
};

const car2: Car = {
  name: "Avantte",
  brand: "Hyndai",
  price: 1600,
  variety: "Sedan",
  feature: {
    fuel: "LPG",
    engin: "I4",
    exhaust: 1600,
  },
};

const car3: Car = {
  name: "XC90",
  brand: "Volvo",
  price: 9300,
  variety: "SUV",
  feature: {
    fuel: "Gasoline",
    engin: "I4",
    exhaust: 2000,
  },
};

const car4: Car = {
  name: "AMGGTR",
  brand: "Bents",
  price: 25000,
  variety: "Sports",
  feature: {
    fuel: "Gasoline",
    engin: "V8",
    exhaust: 4000,
  },
};

const carFunc = (car: Car) => {
  switch (car.name) {
    case "Tucson":
      console.log(
        `${car.name}입니다. 브랜드는 ${car.brand}이고 가격은 ${car.price}입니다. ${car.feature.fuel}을 사용합니다.`
      );
      break;
    case "Avantte":
      console.log(
        `${car.name}입니다. 브랜드는 ${car.brand}이고 가격은 ${car.price}입니다. ${car.feature.fuel}을 사용합니다.`
      );
      break;
    case "XC90":
      console.log(
        `${car.name}입니다. 브랜드는 ${car.brand}이고 가격은 ${car.price}입니다. ${car.feature.fuel}을 사용합니다.`
      );
      break;
    case "AMGGTR":
      console.log(
        `${car.name}입니다. 브랜드는 ${car.brand}이고 가격은 ${car.price}입니다. ${car.feature.fuel}을 사용합니다.`
      );
      break;
    default:
      throw new Error(`${car} 는 존재하지 않는 타입입니다.`);
  }
};

export const main = () => {
  carFunc(car1);
  carFunc(car2);
  carFunc(car3);
  carFunc(car4);
};