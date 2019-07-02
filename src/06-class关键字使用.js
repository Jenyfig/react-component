function  Per(name,age){
  this.name=name,
  this.age=age
}
//info 属性,直接挂载给了构造函数,所以它是静态属性
Per.info="222"

//通过new 出来的实例,访问到的属性,叫做[实例属性]
const p1=new Per("花花",18)
//console.log(p1);
//console.log(p1.name);
//console.log(p1.age);
//[静态属性]:通过构造函数,直接访问到的属性,叫做静态属性
//console.log(Per.info);
// --------------------
//console.log("------------------------");

class Animal{
  //这是类中的构造器
  //每一个类中,都有一个构造器,如果我们程序员没有手动指定构造器,那么,可以认为类内部有个隐形的.看不见的,空构造器,类似于construtor(){}
  //在 class内部,通过static修饰的属性,就是静态属性
  constructor(name,age) {
    this.name=name,
    this.age=age
  }
  static info="2222";



} 

const p2=new Animal('dog',8);
// console.log(p2);
// console.log(p2.name);
// console.log(p2.age);
//console.log(Animal.info);