type CoffeeUnitType = "Int" | "Float";

type CoffeeUnit = {
  unit: number;
  type: CoffeeUnitType;
};

type CoffeeOrigin = "Korea" | "Japan" | "USA";

type CoffeeBean = CoffeeUnit & {
  from: CoffeeOrigin;
};

type CoffeeAdditives = {
  milk?: CoffeeUnit;
  sugar?: CoffeeUnit;
  ice?: CoffeeUnit;
  beans: CoffeeBean;
};
type CoffeeName = "Americano" | "Latte";

type Coffee = {
  name: CoffeeName;
  price: number;
  additives: CoffeeAdditives;
};

const coffee1: Coffee = {
  name: "Americano",
  price: 3000,
  additives: {
    ice: {
      unit: 1,
      type: "Int",
    },
    beans: {
      unit: 3,
      type: "Int",
      from: "Korea",
    },
  },
};

const cafeCoffees = (coffee: Coffee) => {
  try {
    if (coffee.name === "Americano") {
      console.log(coffee.additives.milk.unit);
    } else {
      if (coffee.additives.milk) {
        console.log(`들어가는 우유의 양은${coffee.additives.milk.unit} 입니다.`);
      } else {
        console.log(`들어가는 우유가 없습니다.`);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const main = () => {
  cafeCoffees(coffee1);
};

export default main;
