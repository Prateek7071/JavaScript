const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("This is promise");
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log('Promise has been resolved!');  
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('this can also be done directly');
        resolve()
    },1000)
}).then(function(){
    console.log('Resolved!');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true
        if(!error){
            resolve({user: "Keetarp", password: "123"});
        }else{
            console.log('Not inside catch block');
            reject('Something went wrong!');
        }
    },1000)
})

promiseThree
.then(function(user){
    console.log(user);
})
.catch(function(error){
    console.log(`${error} here`);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false
        if(!error){
            resolve({username: "Keetarp", password: "123"});
        }else{
            console.log('Not inside catch block');
            reject('Something went wrong!');
        }
    },1000)
})
promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(`${error} here`);
})
.finally(()=>{
    console.log('Finally! promise either resolved or rejected');
    
})


console.log(typeof promiseFour);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false
        if(!error){
            resolve({username: "Keetarp", password: "123"});
        }else{
            reject('Something went wrong!');
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
        console.log(response.password);
        
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()