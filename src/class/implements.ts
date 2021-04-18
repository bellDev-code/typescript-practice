// implements 구현이라는 뜻

// 인터페이스 선언명 방법
// interface ICoffee {

// }

// interface CoffeeImpl {

// }

// beans 앞에 public private 선언 안하면 public이 기본값
// 커피 클래스를 만들때 무조건 구현해라.
interface ICoffee {
  beans: number;
  water: number;
  milk?: number;

  make: (beans: number, water: number, milk?: number) => number;
}

interface IFood {
  from: string;
}

class Coffee implements ICoffee, IFood {
  beans: number = 0;
  water: number = 0;
  milk: number = 0;
  from: string = "colombia";
  constructor() {}

  make(beans: number, water: number, milk?: number) {
    if (typeof milk === "number") {
      return beans + water + milk;
    }
    return beans + water;
  }
}

export const main = () => {};
