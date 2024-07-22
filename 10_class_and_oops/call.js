function SetUserName(username){
    //complex db call
    this.username=username    
    console.log("called");
}// like mere saman aap rakh lo mai gayab hi jau to bhi koi dikat nahi

function createUser(username,email, password){
    // SetUserName(username) -> only gave the reference
    // SetUserName.call(username) -> ok but loss the setusername this func from stack
    SetUserName.call(this, username);// this gaves the current context and hold and it say to use the current context this not from upper one
   
    this.email=email
    this.password=password
}

const chai = new createUser("chai","chai@fb.com", "123");
console.log(chai);