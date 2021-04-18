import { cloneDeep } from "lodash";

type Coin = {
  name: string;
  price: number;
  unit: number;
};

export const main = () => {
  // 읽기 전용 변수로 바꾸는 ReadOnly
  const coin: Readonly<Coin> = {
    name: "Doge",
    price: 385,
    unit: 1000,
  };

  // coin.name = "bitcoin" Error
};
