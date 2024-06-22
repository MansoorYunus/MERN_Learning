//callbacks

//const fs = require("fs");

function ReadFile(logdata){
    fs.readFile("log.txt", "utf-8", function(err, data){
        logdata(data);
    })
}

function log(data){
    console.log(data);
}

//ReadFile(log);

function myOwnSetTimeOut(fn,duration){
    setTimeout(fn,duration);
}

// myOwnSetTimeOut(function(){
//     console.log("Hi There!!!");
// }, 2000);


//Promises

//prettier way to call callbacks

const fs = require("fs");

function ReadFile(){
    return new Promise(function(resolve){
        fs.readFile("log.txt", "utf-8", function(err, data){
            resolve(data);
        });
    })
}

function log(data){
    console.log(data);
}

// ReadFile().then(log);

function myTimeOut(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
    return p;
}

myTimeOut(1000).then(function(){
    console.log("Hi There!!!");
});