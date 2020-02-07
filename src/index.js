
/*
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-07 11:07:44
 */
console.log('hello webpack');
let str = require('./a.js')
require('./index.css');

let fn =() =>{
    console.log("es6语法");
    
}

fn()

class A{
    a=10000;
}
let a =new A();
console.log(a.a);
