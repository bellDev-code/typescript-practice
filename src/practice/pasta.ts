type Pasta = {
  name: PastaName;
  price: number;
  from: string;
  material: PastaMaterial;
};

type PastaName = "Rose" | "Tomato" | "AlioOlio";

type PastaMaterial = {
  seeFood?: SeeFoodMaterial;
  bacon: CommonMaterial;
  tomato: CommonMaterial;
  cream: CommonMaterial;
};

type CommonMaterial = {
  bacon: number;
  tomato: number;
  cream: number;
};

type SeeFoodMaterial = {
  unit: number;
  type: string;
};

export const main = () => {};
