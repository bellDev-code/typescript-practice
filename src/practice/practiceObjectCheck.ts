type Bit = {
  name: string;
  price: number;
};

type Alt = {
  name: string;
  price: number;
  up: () => void;
};

const superUp = (coin: Bit | Alt) => {
  if ("up" in coin) {
    return true;
  }
  return false;
};

export const main = () => {
  const bit: Bit = {
    name: "Bitcoin",
    price: 6900000,
  };
  const alt: Alt = {
    name: "Altcoin",
    price: 500,
    up: () => null,
  };
  console.log(superUp(bit));
  console.log(superUp(alt));
};
