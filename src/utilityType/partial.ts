import _ from "lodash";

type Coin = {
  name: string;
  price: number;
  unit: number;
  change: () => void;
};

type Phone = {
  name: string;
  price: number;
  madeBy: string;
};

// mutalbe 변성 (shalow copy)
// console.log(Object.keys(args));
// const updateCoin = (coin: Coin, args: Partial<Coin>) => {
// for (const key of Object.keys(args)) {
//   coin[key] = ars[key]
// }
// return coin;
// }

// 유틸리티 타입 Partial
const updateCoin = (coin: Coin, args: Partial<Coin>) => {
  // Imutable 불변성 (deep copy)
  // Object assign은 타입 추론이 안되므로 변수에 직접 타입 선언
  // # 1번째 방법 (Shalow copy)
  // const result: Coin = Object.assign({}, coin);

  // # 2번째 방법
  // deep copy
  // 함수 속성이 있는 오브젝트는 이걸로 만들면 안됀다.
  // const result: Coin = JSON.parse(
  //   JSON.stringify(coin)
  // );

  // # 3 lodash
  const result = _.cloneDeep(coin);

  return {
    ...result,
    ...args,
  };
};

export const main = () => {
  const test = () => {
    console.log("change!!");
  };
  const coin: Coin = {
    name: "Doge",
    price: 385,
    unit: 1000,
    change: test,
  };

  const phone: Phone = {
    name: "I-phone",
    price: 500000,
    madeBy: "China",
  };

  coin.change();

  const newCoin = updateCoin(coin, {
    name: "bitcoin",
    price: 5800,
    unit: 10000,
  });

  newCoin.change();

  console.log(newCoin);
  console.log(coin);
};
