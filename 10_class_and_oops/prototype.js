// let myName="hitesh    ";

// console.log(myName.length);
// console.log(myName.trim().length); // low iq
// console.log(myName.trueLength); // property


let myHeros=["Thor","Spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(`spidy Power is ${this.spiderman} `)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
    console.log(`hitesh says hello`)
}

// for objects
// heroPower.hitesh();

// for array
// myHeros.hitesh()
// myHeros.heyHitesh()// this power gaves only to the array
// heroPower.heyHitesh() //type error becz could not heyhitesh in object


// Prototypal inheritence

const user = {
    name:"chai",
    email:"cjhdf@google.com"
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignement:'JS Assingnment',
    fullTime:true,
    __proto__:TeachingSupport
}

teacher.__proto__ = user;

//modern syntax

Object.setPrototypeOf(TeachingSupport, teacher);


let anotherUsername = "ChaiAurCode       "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`) -> undefined becz no context of name
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"Manish".trueLength();
"Banana".trueLength();  