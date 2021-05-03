interface Coin {
  name: string;
  species: "bitcoin" | "altcoin";
}

interface IBitcoin extends Coin {}
interface IAltcoin extends Coin {}

class Bitcoin implements IBitcoin {
  name: string;
  species: "bitcoin" = "bitcoin";

  constructor(name: string) {
    this.name = name;
  }
  make() {
    console.log("비트코인을 채굴중입니다.");
  }
}

class Altcoin implements IAltcoin {
  name: string;
  species: "altcoin" = "altcoin";

  constructor(name: string) {
    this.name = name;
  }
}

export const main = () => {
  const bit: Coin = new Bitcoin("bitcoin");
  const alt: Coin = new Altcoin("altcoin");

  if (bit instanceof Bitcoin) {
    bit.make();
  }
};
