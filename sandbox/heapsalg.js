//Heaps Algorithm
var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
    swap(array, j - 1, n - 1);  // -1 to account for javascript zero-indexing
    }
  }
};


// For testing:
var print = function(input){
  console.log(input);
}

heapsPermute([1, 2, 3], print);