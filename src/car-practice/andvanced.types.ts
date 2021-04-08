export type Car = (Avantte | Ranger | GR86) & {
  price: number;
};

// type CarName = "Avantte" | "Ranger" | "GR86";

export type CarCharacteristics = {
  fuel?: FuelTypes;
  fuelEfficiency: number;
};

export type FuelTypes = "gasoline" | "digel" | "hybrid";

export type BrandTypes = "Hyndai" | "Ford" | "Toyota";

export type CarKind = "Sedan" | "SUV" | "Sports";

export type Avantte = {
  name: "Avantte";
  characteristics: AvantteCharacteristics;
  brand: BrandTypes;
};

export type AvantteCharacteristics = CarCharacteristics & {
  kind: CarKind;
  size: CarSize;
};

export type CarSize = {
  unit: number;
};

export type Ranger = {
  name: "Ranger";
  characteristics: RangerCharacteristics;
  brand: BrandTypes;
};

export type RangerCharacteristics = CarCharacteristics & {
  kind: CarKind;
};

export type GR86 = {
  name: "GR86";
  characteristics: GR86Characteristics;
  brand: BrandTypes;
};

export type GR86Characteristics = CarCharacteristics & {
  kind: CarKind;
};
