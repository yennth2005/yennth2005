// function 
//decleration funtion
function sayHi(name) {
    // console.log(`Xin chào ${name}`);
    return `Xin chào ${name}`;
}
var result = sayHi("haiyen22");
// console.log(result);

//expression function
var sayHi2 = function(name){
    return `Welcome ${name}`
}
// console.log(sayHi2("haien1"));


//Arrow function => ()
var sayHi3= (name, age) =>{
    return `Teen: ${name}, Tuổi: ${age}`;
}
// console.log(sayHi3("Yến", 19));
var sayHi4= name => `Hello ${name}`;
// console.log(sayHi4("2rens"));

//Default parameter
var total = (a=0, b=0) => a+b;
// console.log(total(10));

//destructuring
var arr=[1,4,5]
var [a,,c]=arr;
// console.log(b);
var info={
    name: "yến",
    age: 19,
    child:{
        name: "hải"
    }
}
var {name,age}=info;
// console.log(name);
// console.log(age);
var {name, age, child:{name: childName}}=info;
// console.log(name);
// console.log(childName);
const showInfo=({name,age,child:{name: childName}})=>{
    // console.log(name);
    // console.log(age);
    // console.log(childName);
    
}
showInfo(info);

//REST: phần còn lại
var arr=[1,2,3,4,5];
var [first, ...rest]=arr;
// console.log(rest);
var info={
    name: "yến",
    age: 19,
    child:{
        name: "hải"
    }
}
var {name, ...restInfo}=info;
// console.log(name);
// console.log(restInfo);
var sum=(a,...rest)=>{
    // let total=0;
    rest.forEach((item,index)=>{
        // console.log(item);
        // console.log(index);
        a+=item;
        // total+=item;
    })
    return a;
}
// console.log(sum(1,2,3,4,5));





//spread ...: phân rã
var arr1= [1,2,3];
var arr2=[3,5,6];
// console.log(arr1.concat(arr2));
var newArr=[...arr1,...arr2];
console.log(newArr);
var obj1={
    name: "haiyen1",
    age: 20
}
var obj2={
    dream: "winner"
}
var newObj={...obj1, ...obj2};
// console.log(newObj);

//Biến tham trị
var a=1
var b=a;
a=2;
// console.log(b);

//Biến tham chiếu (array, object)
var a={value:1};
var b=a;//gán vị trí nhớ của a cho b (a và b cùng trỏ đến 1 ô nhớ)
a.value=2
// console.log(b);


//Deep clo