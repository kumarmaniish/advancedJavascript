const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(descripter);

// console.log(Math.PI);
// Math.PI =5;
// console.log(Math.PI); // it doesnot overwrite because writable property is false;


// const mynewObject = Object.create(null);

const chai = {
    name:'ginger chai',
    price: 250,
    isAvaliable: true,

    orderChai: function(){
        console.log("chai nahi bani")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai));// undefined becz objects does not have descriptor
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));// it shows all property descriptors 

// we can change its property 
// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// for (let [key, val] of chai) {
//     console.log(`${key} : ${value}`);
// }  chai is not iterable


for (let [key, val] of Object.entries(chai)) { // by this you cn make it iterable
   if(typeof val !== 'function'){
    console.log(`${key} : ${val}`);
   }
}