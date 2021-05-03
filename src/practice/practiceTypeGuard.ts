type Bitcoin = {
  name: string;
  price: number;
};

type Altcoin = {
  name: string;
  price: number;
  block: () => void;
};

const getCoin = (coin: Bitcoin | Altcoin) => {
  (coin as Altcoin).block();
  return coin as Altcoin;
};

export const main = () => {
  const bit: Bitcoin = {
    name: "Bitcoin",
    price: 1000,
  };

  const alt: Altcoin = {
    name: "Altcoin",
    price: 10,
    block: () => null,
  };
  const coin = getCoin(alt);
  console.log(coin);
};
