import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previosHash: string;
  public data: string;
  public timestamp: number;

  // 블록안에서 사용할 수 있는 함수를 만든다.
  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  constructor(index: number, hash: string, previosHash: string, timestamp: number, data: string) {
    this.index = index;
    this.hash = hash;
    this.previosHash = previosHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const genesisBlock: Block = new Block(0, "20202020", "", 1234, "hello");

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);

  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, newTimestamp, data);
  return newBlock;
};

export const main = () => {
  console.log(createNewBlock("hello"), createNewBlock("bye bye"));
};
