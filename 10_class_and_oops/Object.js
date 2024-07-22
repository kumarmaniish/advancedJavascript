function multiBy5(num){
    return num*5;
}
multiBy5.power=2;

console.log(multiBy5(5));
console.log(multiBy5.power);
console.log(multiBy5.prototype);

//  In javascript everything is a object, function is function and object too
// javascript is a prototypal inheritence
//  Array,string->object->null

function createUser(username, scrore){
    this.username = username;
    this.scrore=scrore;
}

createUser.prototype.increament=function(){
    this.scrore++;
}

createUser.prototype.printMe= function(){
    console.log(`scrore is ${this.scrore}`);
}

// understanding of new keyword, when you remove it gets error
const chai =new createUser("Chai",25)
const tea = createUser("Tea", 250);

chai.increament()
chai.printMe() 