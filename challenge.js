function el(arr) {
    var t = 1;
    var current = [];
	var result = [];
    for(var b = 0; b<arr.length; b++) {
        t =t * arr [b].length;
        console.log(t);
        current[b]=0; console.log(current[b]);

    }
for(var a= 0; a<t; a++) {
console.log(a);
console.log(t);
var inc = 1;
result [a]= "";
console.log(result[a]);
for (var b=0; b<arr.length;b++) {
console.log(b);
result[a]=result[a]+arr[b] [current[b]] + " ";
console.log(arr[b] [current[b]]);
console.log(result[a] + arr[b]);
console.log(result[a]);
console.log(arr[b]);
console.log(arr[b].length);
console.log(current[b]);
console.log(current[b]+inc);
if((current[b]= current[b] + inc) === arr[b].length)
current[b]=0;
else
inc =0;
}


}
return(result);
}
