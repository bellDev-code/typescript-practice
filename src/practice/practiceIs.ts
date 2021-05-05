interface Coin {
  name: string;
  kind: "Bit" | "Alt";
}

interface IBit extends Coin {}
interface IAlt extends Coin {}

class Bit implements IBit {
  name: string;
  kind: "Bit" = "Bit";
  constructor(name: string) {
    this.name = name;
  }
  superUp() {
    console.log("개씹떡상중입니다.");
  }
}

class Alt implements IAlt {
  name: string;
  kind: "Alt" = "Alt";

  constructor(name: string) {
    this.name = name;
  }
}

const isBit = (coin: Coin): coin is Bit => {
  return coin.kind === "Bit";
};

export const main = () => {
  const bitcoin: Coin = new Bit("bitcoin");

  if (isBit(bitcoin)) {
    console.log(bitcoin.superUp());
  }
};
