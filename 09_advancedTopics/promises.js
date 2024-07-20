/*const promiseOne = new Promise(function(resolve,reject){
    //do async task
    //db calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },2000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


//2nd promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Asnc 2 resolve")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"chai", email:"chai@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"chai", pass : "123"})
        }
        else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{console.log("The promise is either resolve and reject")})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"JavaScript", pass : "123"})
        }
        else{
            reject('ERROR: JS Went Wrong')
        }
    },1000)
})

async function consumePromimseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumePromimseFive();


async function getAllUSers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data);
    }
    catch (error) {
        console.log("E: ",error);
    }
}
getAllUSers()
*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=> console.log(error))