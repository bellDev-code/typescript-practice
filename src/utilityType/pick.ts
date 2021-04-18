import { cloneDeep } from "lodash";

type Coin = {
  name: string;
  price: number;
  unit: number;
};

const updateCoin = (coin: Coin, args: Pick<Coin, "name" | "price">) => {
  const result = cloneDeep(coin);
  return {
    ...result,
    ...args,
  };
};

const foo = (coin: Coin, key: keyof Pick<Coin, "name" | "price">) => {
  coin[key];
};

export const main = () => {
  const coin: Coin = {
    name: "Doge",
    price: 385,
    unit: 1000,
  };

  updateCoin(coin, {
    name: "Bitcoin",
    price: 3000,
  });
};
