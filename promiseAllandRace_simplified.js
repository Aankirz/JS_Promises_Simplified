const exam1=new Promise((resolve,reject)=>{
    resolve('exam-1 Passed');
})
const exam2=new Promise((resolve,reject)=>{
    resolve('exam-2 Passed');
})
const exam3=new Promise((resolve,reject)=>{
    resolve('exam-3 Passed');
})

//so all the promises are resolved and now to execute all the promises all at once we use Promise.all

Promise.all([exam1,exam2,exam3]).then((messages)=>{
    console.log(messages);
})
//messages because 3 messages will be printed

Promise.race([exam1,exam2,exam3]).then((message)=>{
    console.log(message);
})

//Race: the one that gets resolved first among these 3 will only get executed.
