import { cloneDeep } from "lodash";

type Style = {
  name: string;
  price: number;
  unit: number;
};

const UpdatedProperty = <T, K extends keyof T>(element: T, key: K, value: T[K]) => {
  const result = cloneDeep(element);
  result[key] = value;
  return result;
};

export const main = () => {
  const style: Style = {
    name: "MMA",
    price: 130000,
    unit: 100,
  };

  const style02: Style = {
    name: "Boxing",
    price: 50000,
    unit: 40,
  };

  const newStyle = UpdatedProperty(style, "name", "Wrestling");
  const newStyle2 = UpdatedProperty(newStyle, "price", 600);
  console.log(newStyle);
  console.log(newStyle2);
};
