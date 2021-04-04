import { Coffee } from "../advanced.types";

export const getSugarUnit = (coffee: Coffee) => {
  if (coffee.name !== "Americano") {
    throw new Error(`getSugarUnit function only americano type`);
  }
  if (!coffee.additives.sugar) {
    return 0;
  }
  return coffee.additives.sugar.unit;
};
