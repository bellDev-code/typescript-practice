class Engine {
  constructor(private name: string, private power: number) {}

  private ready() {
    console.log("ready...");
  }
  run() {
    this.ready();
    console.log("engine run...");
  }

  // 오버로딩
  // run(name: string, power: number): void;

  // run(power: number): void;

  // run(nameOrPower: any, power?: number) {
  //   console.log(nameOrPower, power);
  // }
}

class Car extends Engine {
  // 심화
  constructor(name: string, power: number) {
    // 상속 클래스 constructor 실행
    super(name, power);
  }

  startUp() {
    console.log(" *** engine ***");

    // 상속 클래스 접근할 때, super. 식으로 접근한다.
    // super.run();

    this.run();
    // 오버로딩
    // this.run("hyndai", 3);

    console.log("car start up completed.");
  }

  run() {
    console.log("car run...");
  }
}

export const main = () => {
  // const engine = new Engine();

  // engine.run();

  const car = new Car("huyndai", 5);

  console.log(car);

  car.startUp();
};

// overriding (오버라이딩)
// 상위 클래스의 함수와 이름과 같은 함수를 하위 클래스에 재정의하는 것

// overloading (오버로딩)
// typescript는
// 두 함수가 같은 이름을 가지고 있으나 인자의 수나 자료형이 다른 경우를 말한다.
