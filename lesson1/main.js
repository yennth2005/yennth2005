// Biến var let const
//camelCasse
var myName="yennth";

//PascalCase
var MyName="yennth";

var myAge=10;
var myAge=20;

let myAddress="Hà Nội";
myAddress="Hà Tây";

//Phạm vi (Scope)
//global scope  (var let)
var a=10;
if(true){
    console.log(a);
}

//block scope (if else, switch case, for)
{
    var b=20; //có thể
    let c=21; //ko thể
}
console.log(b);
// console.log(c);

// local scope (function)
function sayHello(){
    var f =20;
    console.log(f);
}

//Hoisting 
//  e =60;
//  console.log(e);
//  var e;

//  console.log(f);
//  let f;

//Kiểu dữ liệu
/**
 * 
 */
/**
 * toán tử trong JS
 * Toán tử số học: + - * / ++ --
 * Toán tử gán = += -=
 * toán tử so sánh
 * toán tử logic
 */
/**
 * điều kiện
 * if else
 * switch case
 * toán tử 3 ngôi
 */
//Cú pháp
//Toán tử 3 ngôi
var result = (1==true) ?"đúng":"sai";

// DOM (Document Object Model)

// 1. Element

/**
 * id, class, tag
 * css selectors
 */
var h1Heading = document.getElementById("heading");
// console.log({key : h1Heading});
var h1Headings = document.getElementsByClassName("title");
// console.log(h1Headings);

var pElement = document.getElementsByClassName('paragragh');
// console.log(pElement);

var pElement = document.getElementsByTagName('p')
console.log(pElement);

//lỗi
// pElement.forEach(function(item){
//     console.log(item);
// })

for(var i  =0; i < pElement.length; i++){
    console.log(pElement[i]);
}

// 2. Attribute
var h1Heading = document.querySelector('#heading') // id

console.log(h1Heading.id);
h1Heading.id = "heading-2";
h1Heading.style.color = "red";

h1Heading.setAttribute("data", "chinhpd5");
console.log(h1Heading.getAttribute("data"));

console.log();

// get innerText: chỉ lấy nọi dung
//get textContent: lấy cả khoảng trắng