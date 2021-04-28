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

const getPriceCoin = (coin: Coin) => {
  return coin.price;
};

const getPricePhone = (phone: Phone) => {
  return phone.price;
};

const getElement = <T>(element: T) => {
  return element;
};

type Price = {
  price: number;
};

type Unit = {
  unit: number;
};

// 제네릭 기억하자
// 재사용성이 매우 뛰어나다.
const getPrice = <T extends Price>(element: T) => {
  return element.price;
};

const getUnit = <T extends Unit>(element: T) => {
  return element.unit;
};

const getProperty = <T, K extends keyof T>(element: T, key: K) => {
  return element[key];
};

// 바로 선언하는 방법 그러나 밖에 타입을 선언하는게 좋다.
// 유지보수 어렵기 때문에
// const getPrice = <T {price:number}>() => {

// }

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
  // console.log(getPriceCoin(coin));
  // console.log(getPricePhone(phone));
  // console.log(getElement(coin));

  // console.log(getPrice(coin));
  // console.log(getPrice(phone));
  console.log(getUnit(coin));

  // console.log(getProperty(coin, "price"));
  // console.log(getProperty(phone, "madeBy"));
};
