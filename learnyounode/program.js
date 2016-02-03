(function(){
    
    //helloWorldNode();
    //babySteps();
    //myFirstIO();
    //myFirstAsyncIO();
    //filteredLS();
    //makeItModular();
    //httpClient();
    httpCollect();
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

function makeItModular(){
    var dir = process.argv[2]
    var ext = process.argv[3]
    
    require('./myModule')(dir, ext, function (err, data) {
    	if (err) {
    		return console.error(err)
    	}
    
    	data.forEach(function (item) {
    		console.log(item);
    	})
    })
}

function httpClient(){
    var http = require('http')

    var url = process.argv[2]
    
        http.get(url, function (req) {
        	req.setEncoding('utf8')
        	req.on('data', console.log)
        	req.on('error', console.error)
    })
}

function httpCollect(){
    var http = require('http')
    var concat = require('concat-stream')
    var url = process.argv[2]
    
    http.get(url, function (req) {
      req.setEncoding('utf8')
      var sink = concat(function(data){
        console.log(data.split('').length)
        console.log(data)
      })
      req.pipe(sink)
    })
}