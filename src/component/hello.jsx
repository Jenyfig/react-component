
import React from "react";

 export default function  Hello(props){
  console.log(props);
  return <div> 名字{props.name} {props.age} ---{props.genter}  </div>
}


