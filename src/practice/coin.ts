type Coin = (Bitcoin | Ethereum | Doge | CryptoChain) & {
  price: number;
  kimp: string;
};

type CoinInformation = {
  limit: number;
};

type Bitcoin = {
  name: "Bitcoin";
  info: BitcoinInfo;
  unit: number;
};

type BlockProperty = {
  blockTime: string;
  protocol: string;
};

type BitcoinInfo = CoinInformation & {
  MarketCapitalization: number;
  block: BlockProperty;
};

type Ethereum = {
  name: "Ethereum";
  info: EthereumInfo;
  unit: number;
};

type EthereumInfo = CoinInformation & {
  MarketCapitalization: number;
  block: BlockProperty;
};

type Doge = {
  name: "Doge";
  info: DogeInfo;
  unit: number;
};

type DogeInfo = CoinInformation & {
  MarketCapitalization: number;
  block: BlockProperty;
};

type CryptoChain = {
  name: "CryptoChain";
  info: CryptoInfo;
  unit: number;
};

type CryptoInfo = CoinInformation & {
  MarketCapitalization: number;
  block: BlockProperty;
};

const coin01: Coin = {
  name: "Bitcoin",
  price: 5600000,
  unit: 1,
  kimp: "7%",
  info: {
    MarketCapitalization: 1,
    block: {
      blockTime: "10분",
      protocol: "Pow",
    },
    limit: 21000000,
  },
};

const coin02: Coin = {
  name: "Ethereum",
  price: 300000,
  unit: 10,
  kimp: "10%",
  info: {
    MarketCapitalization: 2,
    block: {
      blockTime: "12초",
      protocol: "Pos",
    },
    limit: 100000000,
  },
};

const coin03: Coin = {
  name: "Doge",
  price: 300,
  unit: 100,
  kimp: "13%",
  info: {
    MarketCapitalization: 5,
    block: {
      blockTime: "1분",
      protocol: "Pow",
    },
    limit: 1000000000000000000,
  },
};

const coin04: Coin = {
  name: "CryptoChain",
  price: 220,
  unit: 1000,
  kimp: "5%",
  info: {
    MarketCapitalization: 17,
    block: {
      blockTime: "20분",
      protocol: "Pow",
    },
    limit: 3000000000,
  },
};

const coinList = (coin: Coin) => {
  switch (coin.name) {
    case "Bitcoin":
      console.log(
        `${coin.info.MarketCapitalization}위의 시가총액이고, ${coin.info.block.blockTime}의 생성주기가 있습니다.`
      );
      break;
    case "CryptoChain":
      console.log(
        `${coin.info.MarketCapitalization}위의 시가총액이고, ${coin.info.block.blockTime}의 생성주기가 있습니다.`
      );
  }
};

export const main = () => {
  coinList(coin01);
  coinList(coin02);
  coinList(coin03);
  coinList(coin04);
};
