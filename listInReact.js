// The Road to React, p. 32
// ... array JS playground
// to illustrate the use of map method in an array of integer in JS
// value v and index i can be iterated to return another new array of integer
const numbers = [ 2,3 , 4, 5, 6, 7];

const triplications = numbers.map(function(v,i) { // v is value, i is index of numbers array to iterate
    return 3*v + 3*i;
}
    
);

console.log(triplications);

