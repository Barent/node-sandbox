function permAlone(str) {
  var inputStrArr = str.split(""); 
  var uniqueCharsRegex = /(.)\1+/g;
  var permute = [];
  
  var swap = function (arrayIn, pos1, pos2) {
    var temp = arrayIn[pos1];
    arrayIn[pos1] = arrayIn[pos2];
    arrayIn[pos2] = temp;
  };
  
  function permutations(input) {
  if (input === 1) {
    permute.push(inputStrArr.join(""));
  } else {
    for (var i = 1; i <= input; i += 1) {
      permutations(input - 1);
      var j;
      if (input % 2) {
        j = 1;
      } else {
        j = i;
      }
    swap(inputStrArr, j - 1, input - 1);
    }
  }
}

permutations(inputStrArr.length);

var filterFunction =  permute.filter(function(string){
  return !string.match(uniqueCharsRegex);
});
    
  return filterFunction.length;
}

console.log(permAlone('aab'));