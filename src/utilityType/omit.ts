import { cloneDeep } from "lodash";

type Coin = {
  name: string;
  price: number;
  unit: number;
};

const updateCoin = (coin: Coin, args: Omit<Coin, "name" | "price">) => {
  const result = cloneDeep(coin);
  return {
    ...result,
    ...args,
  };
};

export const main = () => {
  const coin: Coin = {
    name: "Doge",
    price: 385,
    unit: 1000,
  };

  updateCoin(coin, {
    unit: 1000,
  });
};
