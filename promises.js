const { reject } = require("lodash");

let p=new Promise((resolve,reject)=>{
    let a =1+1;
    if(a==2){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

p.then((message)=>{
    console.log('a=2'+message);
}).catch((message)=>{
    console.log('a!=2'+message);
})
