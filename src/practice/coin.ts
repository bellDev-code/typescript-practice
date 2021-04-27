type Coin = (Bitcoin | Ethereum | Doge | CryptoChain) & {
  price: number;
  kimp: number;
};

// type CoinName = "Bitcoin" | "Ethereum" | "Doge" | "CryptoChain";

type CoinInformation = {
  limit: number;
};

type Bitcoin = {
  name: "Bitcoin";
  Info: BitcoinInfo;
  unit: number;
};

type BitcoinInfo = CoinInformation & {
  MarketCapitalization: number;
  block: number;
};

type Ethereum = {
  name: "Ethereum";
  Info: EthereumInfo;
  unit: number;
};

type EthereumInfo = CoinInformation & {
  MarketCapitalization: number;
  block: number;
  protocol?: string;
};

type Doge = {
  name: "Doge";
  Info: DogeInfo;
  unit: number;
};

type DogeInfo = CoinInformation & {
  MarketCapitalization: number;
  block: number;
};

type CryptoChain = {
  name: "CryptoChain";
  Info: CryptoInfo;
  unit: number;
};

type CryptoInfo = {
  MarketCapitalization: number;
  block: number;
};

const coin01: Coin = {
  name: "Bitcoin",
  price: 5600000,
  unit: 1,
  kimp: 7,
  Info: {
    MarketCapitalization: 1,
    block: 2,
    limit: 2000000,
  },
};

const coinList = (coin: Coin) => {
  console.log(`${coin.name}`);
};

export const main = () => {
  coinList(coin01);
};
