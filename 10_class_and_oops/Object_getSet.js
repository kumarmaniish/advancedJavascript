const User = {
    _email: 'h@abc.com', //_ means we define it in private property
    _password: 'abc',

    get email(){ // doesnot mean of _
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    }
}


// factory function
const tea = Object.create(User)
console.log(tea.email);