import _ from "lodash";

type Pasta = {
  name: string;
  price: number;
  unit: number;
};

// 파스타 이름을 가져오는 함수
const getPastaName = (pasta: Pasta) => {
  return pasta.name;
};

type Name = {
  name: string;
};

type Price = {
  price: number;
};

// 제네릭을 통한 이름 가져오는 방법
// 현재 나타나는 문제점?
// 타입 파스타에는 이름과 가격, 인분이 있는데 getName 함수는
// 이름값만 가져올 수 있다.
const getName = <T extends Name>(element: T) => {
  return element.name;
};

const getPrice = <T extends Price>(element: T) => {
  return element.price;
};

// 그리하여 속성을 가져오는 함수를 사용하는게 좋다.
// 타입 파스타의 속성을 가져오는 함수
const getElement = <T>(element: T) => {
  return element;
};

const getProperty = <T, K extends keyof T>(element: T, key: K) => {
  return element[key];
};

const updateProperty = <T, K extends keyof T>(element: T, key: K, value: T[K]) => {
  const result = _.cloneDeep(element);
  result[key] = value;
  return result;
};

export const main = () => {
  const pasta: Pasta = {
    name: "tomato-pasta",
    price: 5000,
    unit: 1,
  };

  // console.log(getName(pasta));
  // console.log(getPrice(pasta));

  // console.log(getElement(pasta));

  // console.log(getProperty(pasta, "price"));
  // console.log(getProperty(pasta, "unit"));

  const newPasta = updateProperty(pasta, "name", "AlioOlio");
  const newPasta2 = updateProperty(newPasta, "price", 3000);

  console.log(newPasta);
  console.log(newPasta2);
};
