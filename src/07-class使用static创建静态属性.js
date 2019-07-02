function  Per(name,age){
  this.name=name,
  this.age=age
}
//info 属性,直接挂载给了构造函数,所以它是静态属性
Per.info="222"
Per.prototype.say=()=>{
 // console.log(这是per实例化一个属性);
}

Per.show=()=>{
  console.log('这是per的静态show方法');
}

//通过new 出来的实例,访问到的属性,叫做[实例属性]
const p1=new Per("花花",18)
// console.log(p1);
// console.log(p1.say);


console.log("------------------------");

class Animal{
  
  constructor(name,age) {
    this.name=name,
    this.age=age
  }
  static info="2222";
  static show(){
   // console.log('这是Animal的静态方法');
  }

  //这是动物的实例方法(今后会经常用到 实例方法)
   jiao(){
   // console.log('我是Animal的实例方法');
  }


} 

const p2=new Animal('dog',8);
//console.log(p2);
//console.log(Animal.info);
p2.jiao()
Animal.show()