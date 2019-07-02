class Far {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  sayHello() {
    // console.log('大家好,我给你们打个招呼');
  }
}


class Son1 extends Far {
  constructor(name, age) {
    super(name, age)
  }
}

const p1 = new Son1('jack', 11)
// console.log(p1);
p1.sayHello()

class Son2 extends Far {}
const p2 = new Son2('json', 22)
// console.log(p2);
p2.sayHello()