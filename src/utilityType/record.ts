import { cloneDeep } from "lodash";

type CoinType = "WON" | "USDT" | "BTC";

type Coin = {
  name: string;
  price: number;
  unit: number;
};

export const main = () => {
  const coinList: Record<CoinType, Coin> = {
    WON: {
      name: "bitcoin",
      price: 500000,
      unit: 100,
    },
    BTC: {
      name: "sandBox",
      price: 700,
      unit: 128,
    },
    USDT: {
      name: "XLM",
      price: 670,
      unit: 130,
    },
  };
};
