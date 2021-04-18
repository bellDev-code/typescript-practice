type Coffee = {
  name: string;
  water: number;
  milk?: number;
  sugar?: number;
};

type RealCoffee = Required<Coffee>;

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type CoverCoffee<T> = {
  [K in keyof T]: T[K] | Coffee;
};

type Mouse = {
  name: string;
  price: number;
  weight?: number;
};

export const main = () => {
  const mouse: CoverCoffee<Mouse> = {
    name: "logitech",
    price: 3000,
  };

  mouse.name = "sibal";
  mouse.name = {
    name: "ddsds",
    water: 30,
  };
};
