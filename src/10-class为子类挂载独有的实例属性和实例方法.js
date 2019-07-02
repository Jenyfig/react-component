class Far {
  constructor(name, age) {
    this.name = name,
      this.age = age
  }
}


class Son1 extends Far {
  constructor(name, age) {
    super(name, age);
  }
}
const p1 = new Son1('纷纷', 18)
// console.log(p1);

class Son2 extends Far {
  constructor(name, age,IdNumber) {
    super(name, age);
    this.IdNumber=IdNumber
  }
}
const p2 = new Son2('曹操', 118,13023300303)
// console.log(p2);
// console.log(p2.IdNumber);