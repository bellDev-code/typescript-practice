class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("lynn", 28, "female");

const sayHi = (person: Human): string => {
  return `${person.name}입니다. 저의 나이는 ${person.age}이고, 성별은 ${person.gender}`;
};

export const main = () => {
  console.log(sayHi(lynn));
};
