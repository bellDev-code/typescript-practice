// Coffee type 선언

// coffe가 라떼인지 아메리카노 인지 판단하는 함수
// name은 union 타입으로 하는게 좋다 => 힌트

// latte 면 우유의 양 출력, 아메리카노면 설탕의 양

// type CafeCoffee = Americano | Latte;

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

const coffee2: Coffee = {
  name: "Latte",
  price: 5000,
  additives: {
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
  if (coffee.name === "Americano") {
    // if (coffee.additives.sugar) {
    //   // 조건으로 들어가는 속성값은 확인을 해줘야한다.
    //   // 있는지 없는지
    //   console.log(`들어가는 설탕은 ${coffee.additives.sugar.unit}`);
    // } else {
    //   console.log(`들어가는 설탕이 없습니다.`);
    // }
    // ? 문법
    // 없으면 undefined
    // if (coffee.additives.sugar && coffee.additives.sugar.unit) {
    //   console.log("hello");
    // }
    // if (coffee.additives.sugar?.unit) {
    //   console.log("hello");
    // }
    // console.log(`들어가는 설탕은 ${coffee.additives.sugar?.unit}`);
  } else {
    if (coffee.additives.milk) {
      console.log(`들어가는 우유의 양은${coffee.additives.milk.unit} 입니다.`);
    } else {
      console.log(`들어가는 우유가 없습니다.`);
    }
  }
};

export const main = () => {
  cafeCoffees(coffee1);
  cafeCoffees(coffee2);
  cafeCoffees(coffee3);
};

export default main;
