class User{
    constructor(username){
        this.username=username;
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        
        super(username); // for access the argument from parent class
        
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@teacher.com","123")//lass constructor Teacher cannot be invoked without 'new'
// chai.addCourse();

const masalaChai = new User("MasalaChai");
// masalaChai.addCourse(); // not accessible for user
// masalaChai.logMe();
// chai.logMe()

// console.log(chai === masalaChai); // false
// console.log(chai.logMe() === masalaChai.logMe()); -> true

console.log(chai instanceof Teacher);//true
console.log(chai instanceof User); //true
console.log(masalaChai instanceof Teacher);//false
console.log(masalaChai instanceof User); //true

