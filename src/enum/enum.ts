type BrandType = "Hyndai" | "Honda" | "Toyota";

// db의 저장공간을 쾌적하기 위해서
// 완벽하지 않다는 말이 있음. 주로 type선언을 하자.

// enum Brand {
//   Hyndai,
//   Honda,
//   Toyota,
// }

// 취향차이
enum Brand {
  Hyndai = "Hyndai",
  Honda = "Honda",
  Toyota = "Toyota",
}

enum Coffee {
  Americano,
  Latte,
}

const getEnum = (brand: Brand) => {
  return brand;
};

const getType = (brand: BrandType) => {
  return brand;
};

export const main = () => {
  // const brand: Brand = "Hyndai";
  const hyndai: Brand = Brand.Hyndai;
  const honda: Brand = Brand.Honda;
  const toyota: Brand = Brand.Toyota;

  console.log(hyndai);
  console.log(honda);
  console.log(toyota);

  const americano: Coffee = Coffee.Americano;
  const latte: Coffee = Coffee.Latte;

  // console.log(hyndai === Americano);

  getType("Hyndai");
  getEnum(Brand.Hyndai);
};
