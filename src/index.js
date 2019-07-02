
//第一步
import React from "react";
import ReactDOM from "react-dom";

// 注意:这里的@符号,表示 项目根目录中的src 这一层目录
import Hello from "@/component/hello"
import  "@/06-class关键字使用"
import  "@/07-class使用static创建静态属性"
import  "@/08-class的继承"
import  "@/09-class子类继承父类的方法"
import  "@/10-class为子类挂载独有的实例属性和实例方法"


class Mobile extends React.Component{

  constructor() {
    super()
    this.state={ //这个this.state ={}就相当于vue中的data(){return}
      msg:"大家好,我是class关键字创建的组件,私有的数据"
    }
  }
  
  //render 函数的作用,是渲染当前组件所对应的  虚拟的DOM元素
  render(){
    //在class关键字创建的组件中,如果想使用外界传递过来的props参数,不需接收,直接通过this.props.****访问即可
    
    //在class创建的组件中,this.state上的数据,都是可读可写的.
    this.state.msg="msg的值被我修改了";
   return
  //注意:在class组件内部,this表示当前组件的实例
    <div>我是一个Mobile组件{this.props.name}
    </div>

  }
}

const dog={
  name:"大黄",
  age:18,
  genter:"男"
}
ReactDOM.render(
<div>
  111
 < Hello {...dog} ></Hello>
 <Mobile {...dog} ></Mobile>
 <h3>{this.state.msg}</h3>
</div>,
document.getElementById('app'))


