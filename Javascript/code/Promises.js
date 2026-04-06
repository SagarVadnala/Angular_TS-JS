//Promise: The promise object represent the eventual completion or faillor 
           // of an ASYNC operation & its resulting value

            //Lets create promises
// promise --- creation and consume 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // db calls , crypoGraphy ,network
    setTimeout(function(){
        console.log('Async task is completed');

        resolve()  // to connect .then

    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})  //Resolve


new Promise(function(resolve,reject){
    setTimeout(() => {
         console.log("Async task 2");
         resolve()
    }, 1000);

}).then(function()
{
    console.log("Async task comp")
})



const promis3 = new Promise(function(resolve,reject){

    setTimeout(() => {
        resolve({
            username : "Sagar",
            email : "Sagar@gmail.com"
        })
    }, 1000);

})
promis3.then(function(user){
     console.log(user);

})


const Promis4 = new Promise(function(resolve, reject){

    setTimeout(() => {
        let error = false

        if( !error ){
            resolve({
                username : "Sagar",
                password : "@123"
            })
        } else 
            reject('Error: went Wrong');
        
    }, 1000);
})

 Promis4.
 then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)

}).finally(() => console.log("tHE PROMISE IS EITHER RESOLOVED OR REJECTED"))



const promise5 = new Promise( function(resolve,reject){
    setTimeout(() => {
        let error = true;

        if( !error ){
            resolve({
                username : "javascript",
                password : "@12345"
            })
        } else 
            reject('Error: JS went Wrong');
        
    }, 1000);
})
// async cant handlhandle errors so add try catch block 
async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);

    }
    catch(error){
            console.log(error);
    }
   
}
consumePromise5();


// async function getAllUsers() {
//   try{
//      const responce =await fetch('https://jsonplaceholder.typicode.com/users');

//    const data = await responce.json() // it will take time to convert so we will not get OP if  its not await
//    console.log(data);
//   }
//   catch(error){
//     console.log('E: error ') 
//   }
    
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response;
})
.then((data) => {
    console.log(data);
})