/**
 * string
 * number
 * undefined
 * null
 * any => 웬만하면 쓰지 않는다.
 */

{
  type CarNum = number | string;

  let hello: string = "hello";

  let num: number = 3;
  // num = "a" // error

  let a: undefined = null;

  const array: Array<number> = [1, 2, 3];

  // const array: Array<number> = ["a", "b", "c"]; // error

  const array2: Array<number | string> = [1, 2, 3, "a", "b", "c"];

  const array3: Array<number | string | Array<number>> = [1, 2, 3, "a", "b", "c", [1, 2, 3]];

  const array4: number[] = [1, 2, 3];

  const carNum: CarNum = 1234;
  const carNum2: CarNum = "1234";
  const carNum3: CarNum[] = [1234, "1234", 123];

  // 함수
  // function getCarNum(index: number): CarNum {
  //   return carNum3[index];
  // }

  const getCarNum = (index: number): CarNum => {
    return carNum3[index];
  };

  // interface 형태
  interface ICoffee {
    name: string;
    price: number;
  }

  // type 선언은 대문자
  // Union type
  type Coffee = {
    name: string;
    price: number;
  };

  const coffee: Coffee = {
    name: "latte",
    price: 2500,
  };

  type OddNum = 1 | 3 | 5;

  const odd: OddNum = 3;

  type CoffeeName = "latte" | "americano";

  const myCoffee: CoffeeName = "latte";

  const MakeCoffee = (name: string, price: number): Coffee => {
    return {
      name,
      price,
      // createdAt: 3, // error 반환을 선언해주는게 좋다
    };
  };

  const sumNumbers = (...numbers: number[]) => {
    return numbers.reduce((prev, num) => prev + num, 0);
  };

  const numbers = [1, 2, 3, 4];

  console.log(sumNumbers(...numbers));
  console.log(sumNumbers(1, 2, 3));

  // 배열 원소를 새로운 변수명으로 바로 할당하고 싶을 때
  const [stateNum, setStateNum] = numbers;

  const { name, price } = coffee;
}
