class Person {
  // public readonly HAVE_EARS = true;

  // 개발자 팀원 입장에서 최대한 필요한거 보여주게
  // 협력용
  // public eyes: any;
  // private _eyes: number;
  // private _lip: number;

  // // 초기화
  // constructor(eyes: number, lip: number) {
  //   this.eyes = eyes;
  //   this.lip = lip;
  // }

  // 초기화 방법 2
  // 초기화를 직접 안해주고 인수받는곳애서 선언해서 바로 초기화하는 방법
  constructor(private _eyes: number, private _lip: number, private readonly HAVE_EARS: boolean) {}

  get eyes() {
    // 작업을 하고 싶을때 여기에 작업값을 넣어주면 된다.
    return this._eyes;
  }

  set eyes(value: number) {
    this._eyes = value;
  }

  doubleEyes(num: number) {
    return this.eyes * num;
  }

  get lip() {
    return this._lip;
  }

  set lip(value: number) {
    this._lip = value;
  }

  devideLip(num: number) {
    return this.lip / num;
  }
}

export const main = () => {
  const person = new Person(2, 1, true);

  // person.HAVE_EARS = 3

  // person.eyes = 3;
  // person.lip = 10;
  // // console.log(person.doubleEyes(3));

  // // console.log(person.lip);
  // console.log(person.devideLip(5));

  console.log(person);
};
