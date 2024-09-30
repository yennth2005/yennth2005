// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */

const list = [
    {
        name: "chinhpd5",
        age:20,
        gender: true,
        mark: 10
    },
    {
        name: "chinhpd6",
        age:21,
        gender: false,
        mark:7
    },
    {
        name: "chinhpd8",
        age:19,
        gender: true,
        mark: 9
    },
    {
        name: "chinhpd9",
        age:20,
        gender: false,
        mark: 9
    }
]

// forEach: duyệt qua toàn bộ phần tử trong mảng
let trElements= '';
list.forEach((item, index)=>{
    trElements += `
         <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
});
// console.log(trElements);

const tbodyElement= document.querySelector('tbody');
tbodyElement.innerHTML= trElements;

//find: tìm kiếm một phần tử gần nhất thoả mãn điều kiện (return)
//nếu có ít nhất 1 phần tử thoả mãn điều kiện ->kết thúc vòng lặp
//nếu không có phần tử nào thoả mãn điều kiện ->undefined

const findMark = list.find((item, index)=>{
    // console.log(index);
    
    return item.mark == 9;
})
// console.log(findMark);

//every: duyệt qua mảng, trả về giá trị boolean (true | false)
//kiểm tra xem toàn bộ các phàn tử trong mảng có thoả mãn điều kiện không ->true
//nếu có 1 phần tử không thoả mãn điều kiện ->false ->kết thúc vòng lặp

const checkEvery= list.every((item, index)=>{
    return list.mark >8;
})
// console.log(checkEvery);

//some: duyệt qua mảng, trả về giá trị boolean (true | false)
//kiểm tra xem có ít nhất một phần tử trong mảng thoả mãn điều kiện ->true->kết thúc vòng lặp;
//nếu tất cả không thoả mãn điều kiện ->false
const checkSome= list.some((item,index)=>{
    return !list.gender;
})
// console.log(checkSome);

//map: lấy tất cả các phần tử trong mảng và trả về 1 mảng mới (return)
const newList = list.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join('');
// console.log(newList);

// tbodyElement.innerHTML = newList;

//filter: duyệt qua toàn bộ phần tử mảng
// trả về một mảng mới có các giá trị thoả mãn đk return

const filterList = list.filter((item,index)=>{
    return item.mark > 8 ; //item.gender == true
})
// console.log(filterList);

// reduce: duyệt qua toàn bộ phần tử trong mảng và tính toán
// preValue: giá trị lưu trữ qua các lần lặp
// item: giá trị của các phần tử
// index: vị trí
const total = list.reduce((preValue,item,index)=>{
    return preValue += item.mark;
},0)

// console.log(total);