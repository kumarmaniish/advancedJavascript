class User{
    
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    // getter and setter
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }


    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }
}

const hitesh = new User("kumar@gmail.com", 'abc');
console.log(hitesh.email);
console.log(hitesh.password);