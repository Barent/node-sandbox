(function(){
    
    //helloWorldNode();
    //babySteps();
})();

function helloWorldNode(){
    console.log("HELLO WORLD");
}

//process.argv

function babySteps(){
    var total = 0;
    var consoleInput = process.argv;
    for (var i = 2; i < consoleInput.length; i++){
        total += Number(consoleInput[i]);
    }
    
    console.log(total);
}

function myFirstIO(){
     var fs = require('fs');
     
}