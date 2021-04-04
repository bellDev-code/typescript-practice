export type CoffeeUnitType = "Int" | "Float";

export type CoffeeUnit = {
  unit: number;
  type: CoffeeUnitType;
};

export type CoffeeOrigin = "Korea" | "Japan" | "USA";

export type CoffeeBean = CoffeeUnit & {
  from: CoffeeOrigin;
};

// type CoffeeAdditives = {
//   milk?: CoffeeUnit;
//   sugar?: CoffeeUnit;
//   ice?: CoffeeUnit;
//   beans: CoffeeBean;
// };

export type CommonAdditives = {
  sugar?: CoffeeUnit;
  ice?: CoffeeUnit;
  beans: CoffeeBean;
};

export type LatteAdditives = {
  milk: CoffeeUnit;
} & CommonAdditives;

export type AmericanoAdditives = {
  water: CoffeeUnit;
} & CommonAdditives;

export type MochaAdditives = {
  water: CoffeeUnit;
  choco: CoffeeUnit;
} & CommonAdditives;

export type MacchiatoAdditives = {
  water: CoffeeUnit;
  kalamel: CoffeeUnit;
} & CommonAdditives;

export type Latte = {
  name: "Latte";
  additives: LatteAdditives;
};

export type Americano = {
  name: "Americano";
  additives: AmericanoAdditives;
};

export type Mocha = {
  name: "Mocha";
  additives: MochaAdditives;
};

export type Macchiato = {
  name: "Macchiato";
  additives: MacchiatoAdditives;
};

// export type CoffeeName = "Americano" | "Latte";

export type Coffee = (Latte | Americano | Mocha | Macchiato) & {
  price: number;
};
