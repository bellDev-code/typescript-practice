import { cloneDeep } from "lodash";

type Coin = {
  name: string;
  price: number;
  unit: number;
};

type Phone = {
  name: string;
  price: number;
  madeBy: string;
};

type Price = {
  price: number;
};

const getPrice = <T extends Price>(element: T) => {
  return element.price;
};

const UpdateProperty = <T, K extends keyof T>(element: T, key: K, value: T[K]) => {
  const result = cloneDeep(element);
  result[key] = value;
  return result;
};

export const main = () => {
  const coin: Coin = {
    name: "Doge",
    price: 385,
    unit: 1000,
  };

  const phone: Phone = {
    name: "I-phone",
    price: 500000,
    madeBy: "China",
  };

  console.log(getPrice(coin));
  console.log(getPrice(phone));

  const newCoin = UpdateProperty(coin, "name", "bitcoin");
  const newCoin2 = UpdateProperty(newCoin, "price", 300);

  console.log(newCoin);
  console.log(newCoin2);
};
