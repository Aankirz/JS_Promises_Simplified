const userLeft=false;
const userOnline=true;

//Earlier in JS we used callouts
function learnJS(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message:':('
        })
    }else if(userOnline){
        callback('JS is awesome');
    }else{
        errorCallback({
            name:'User Offline',
            message:':('
        })
    }
}

// so now a function is created but will get executed when it's been called.

learnJS((message)=>{
   console.log('Success'+message)
},(error)=>{
    console.log(error.name+" "+error.message)
})

// Now converting this prev code to new updated js type using Promises

function learnJSPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name:'User Left',
                message:':('
            })
        }else if(userOnline){
            resolve('JS is awesome');
        }else{
            reject({
                name:'User Offline',
                message:':('
            })
        }
    })
}

learnJSPromise().then((message)=>{
    console.log('Success'+message)
}).catch((error)=>{
    console.log(error.name+" "+error.message)
})
