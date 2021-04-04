import { Coffee } from "./advanced.types";
import { getSugarUnit } from "./americano/display";

const coffee1: Coffee = {
  name: "Americano",
  price: 3000,
  additives: {
    water: {
      unit: 3,
      type: "Int",
    },
    ice: {
      unit: 1,
      type: "Int",
    },
    // sugar: {
    //   unit: 1,
    //   type: "Int",
    // },
    beans: {
      unit: 3,
      type: "Int",
      from: "Korea",
    },
  },
};

const coffee2: Coffee = {
  name: "Latte",
  price: 5000,
  additives: {
    milk: {
      unit: 3,
      type: "Int",
    },
    ice: {
      unit: 2,
      type: "Float",
    },
    beans: {
      unit: 1,
      type: "Float",
      from: "USA",
    },
  },
};

const coffee3: Coffee = {
  name: "Latte",
  price: 5000,
  additives: {
    ice: {
      unit: 2,
      type: "Int",
    },
    milk: {
      unit: 5,
      type: "Int",
    },
    beans: {
      unit: 5,
      type: "Int",
      from: "Japan",
    },
  },
};

const coffee4: Coffee = {
  name: "Americano",
  price: 8000,
  additives: {
    water: {
      unit: 3,
      type: "Int",
    },
    ice: {
      unit: 2,
      type: "Int",
    },
    sugar: {
      unit: 0.5,
      type: "Float",
    },
    beans: {
      unit: 5,
      type: "Int",
      from: "Japan",
    },
  },
};

const cafeCoffees = (coffee: Coffee) => {
  switch (coffee.name) {
    case "Americano":
      console.log("아메리카노 입니다.");
      console.log(getSugarUnit(coffee));
      break;
    case "Latte":
      console.log("라떼입니다.");
      break;
    case "Macchiato":
      console.log("마끼아또입니다.");
      break;
    case "Mocha":
      console.log("모카입니다.");
      break;
    default:
      throw new Error(`${coffee} 는 존재하지 않는 타입입니다. `);
  }
};

export const main = () => {
  cafeCoffees(coffee1);
  cafeCoffees(coffee2);
  cafeCoffees(coffee3);
};
