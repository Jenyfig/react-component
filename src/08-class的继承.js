class Far {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
}


class Son1 extends Far {}

const p1 = new Son1('jack', 11)
// console.log(p1);

class Son2 extends Far {}
const p2 = new Son2('json', 22)
// console.log(p2);