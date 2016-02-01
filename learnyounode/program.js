(function(){
    
    //helloWorldNode();
    //babySteps();
    //myFirstIO();
    //myFirstAsyncIO();
    filteredLS();
})();

function helloWorldNode(){
    console.log("HELLO WORLD");
};

function babySteps(){
    var total = 0;
    var consoleInput = process.argv;
    for (var i = 2; i < consoleInput.length; i++){
        total += Number(consoleInput[i]);
    }
    
    console.log(total);
};

function myFirstIO(){
     var fs = require('fs');
     var buf = fs.readFileSync(process.argv[2]);
     var str = buf.toString();
     var stringAsArray = str.split("\n");
     var strLength = stringAsArray.length - 1;
     console.log(strLength);
};

function myFirstAsyncIO(){
     var fs = require('fs');
     fs.readFile(process.argv[2], myFirstAsyncIOCallBack);
     function myFirstAsyncIOCallBack(err, data){
         if(err != null){
             console.log(err);
         }
        var str = data.toString();
        var stringAsArray = str.split("\n");
        var strLength = stringAsArray.length - 1;
        console.log(strLength);
        
    }
};

function filteredLS(){
    var fs = require('fs');
    
    var directory = process.argv[2];
    var fileExtension = process.argv[3];
    var extFilter = new RegExp('\\.' + fileExtension + '$');
    function fileDirectoryReadCallBack(err, data){
        if(err != null){
            console.log(err);
        }
        data.forEach(function(input){
            if(extFilter.test(input)){
                console.log(input);
            }
        })
        
    }
    
    fs.readdir(directory, fileDirectoryReadCallBack);
};

