import _ from "lodash";

type Coin = {
  name: string;
  price: number;
  unit: number;
};

// const updateCoin = (coin: Coin, args: Partial<Coin>) => {
//   const result = _.cloneDeep(coin);
//   return {
//     ...result,
//     ...args,
//   };
// };

// const pickUpdateCoin = (coin: Coin, args: Pick<Coin, "name">) => {
//   const result = _.cloneDeep(coin);
//   return {
//     ...result,
//     ...args,
//   };
// };

export const main = () => {
  // const coin: Readonly<Coin> = {
  //   name: "크립토닷컴체인",
  //   price: 300,
  //   unit: 599,
  // };
  const coin: Coin = {
    name: "크립토닷컴체인",
    price: 300,
    unit: 599,
  };

  // const newCoin = pickUpdateCoin(coin, {
  //   name: "샌드박스",
  // });
  // coin.name = "bitcoin";

  console.log(coin);
  // console.log(newCoin);
};
