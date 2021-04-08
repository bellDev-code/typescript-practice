export type Car = {
  name: CarName;
  brand: CarBrand;
  price: number;
  variety: CarVariety;
  feature: CarCommonFeaures;
};

export type CarCommonFeaures = {
  fuel: FuelType;
  engin: string;
  exhaust?: number;
};

export type FuelType = "Gasoline" | "LPG";

export type CarName = "Tucson" | "Avantte" | "XC90" | "AMGGTR";

export type CarBrand = "Hyndai" | "Volvo" | "Bents";

export type CarOrigin = "Korea" | "Japan" | " USA";

export type CarVariety = "SUV" | "Sedan" | "Sports";
