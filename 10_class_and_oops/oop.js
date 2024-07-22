const user={
    username:"manish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne= new Promise()
// const data=new Date()

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    // varname=parameters

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this;
}

// override
// const userOne=User("hitesh",12,true)
// const userTwo=User("ChaiaurCode",11, false)
// console.log(userOne);

 
// now fine
const userOne=new User("hitesh",12,true)
const userTwo=new User("ChaiaurCode",11, false)
console.log(userOne.constructor);
// console.log(userOne);
// console.log(userTwo);

// when new keyword call, 
// firstly empty object is created called instance
// second -> constructor function is called using new keywords
// it packs the arguments and handover it.
// third -> injects all the argumemts and pack it into this keywords
