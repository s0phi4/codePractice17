function myIndexOf(array, target) {
    for (var i=0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    //  else if item was not found
    return -1;
}
myIndexOf([5,4,3,2,1], 5);

//While loop console.log three times

count=0;

var loop = function(){
	while(count<3){
		count++;
		console.log("I'm looping!");
	}
};

loop();

//while loop consoles once
var yen = "web developer";

var soloLoop = function(){
    while(yen) {
        console.log("Looped once!");
        yen = !"web developer";
    }

};

soloLoop();

// Given an array of sorted distinct integers named arr, write a function that returns an index i in arr for which arr[i] = i or -1 if no such index exists.
//
// Implement the most efficient solution possible, prove the correctness of your solution and analyze its runtime complexity (in terms of n - the length of arr).
//
// Examples:
//
// Given arr = [-8,0,2,5] the function returns 2, since arr[2] = 2
// Given arr = [-1,0,3,6] the function returns -1, since no index in arr satisfies arr[i] = i


var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

/*
You're given a vector of vectors of words, e.g.:
[['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']].

Write a generalized function that prints all combinations of one word from the first vector, one word from the second vector, etc.
The solution may not use recursion.

NOTE: the number of vectors and number of elements within each vector may vary.
*/
var greetingTask=[['Hello','successful'],
                  ['engineer','code','diversity'],
                  ['Yenifer','Sundar'],
                  ['excellent work']];


function combine(multiArray) {
  var total = 1;
  var current = [];
  var output = [];

  for(var b = 0; b < multiArray.length; b++) {
    total *= multiArray[b].length;
    current[b]=0;
  }

  for(var a = 0; a < total; a++) {
    var inc = 1;
    output[a] = "";
    for(var b = 0; b < multiArray.length; b++) {
      output[a] += multiArray[b] [current[b]] + ',' + '';
      if ((current[b] += inc) == multiArray[b].length)
        current[b] = 0;
      else
        inc = 0;
    }
  }
  return (output);
}
console.log(combine(greetingTask));
