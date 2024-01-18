let vazio = [];
let numeros = [
  "zero",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
];
vazio[1]; // indefinido
numeros[1]; // 'um'
vazio.length; // 0
numeros.length; // 10

//literais

let objeto_numeros = {
  0: "zero",
  1: "um",
  2: "dois",
  3: "três",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove",
};

let misc = [
  "string",
  98,
  6,
  verdadeiro,
  falso,
  nulo,
  indefinido,
  ["aninhado", "array"],
  { objeto: verdadeiro },
  NaN,
  Infinidade,
];
misc.length; // 10

// propagação de matriz
let a = [1, 2, 3];
let b = [0, ...a, 4];  // b == [0, 1, 2, 3, 4]

// construtores de matriz
let op1 = new Array();
let op2 = new Array(10);
let op3 = new Array(5, 4, 3, 2, 1, "testing, testing");

// forEach

let data = [1,2,3,4,5], sum = 0;
data.forEach(value => { sum += value; });          // sum == 15
data.forEach(function(v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]

// map
let opMap = [1, 2, 3];
a.map(x => x*x)   // => [1, 4, 9]

// filter
let opFilter = [5, 4, 3, 2, 1];
a.filter(x => x < 3)         // => [2, 1];
a.filter((x,i) => i%2 === 0) // => [5, 3, 1];

// find
let opFind = [1,2,3,4,5];
a.find(x => x % 5 === 0)   // => 5
a.find(x => x % 7 === 0)   // => undefined

// reduce
let opReduce = [1,2,3,4,5];
a.reduce((x,y) => x+y, 0)          // => 15
a.reduce((x,y) => x*y, 1)          // => 120
a.reduce((x,y) => (x > y) ? x : y) // => 5

// concat
let opConcat = [1,2,3];
a.concat(4, 5)          // => [1,2,3,4,5]
a.concat([4,5],[6,7])   // => [1,2,3,4,5,6,7]
a.concat(4, [5,[6,7]])  // => [1,2,3,4,5,[6,7]]
a                       // => [1,2,3]

// push e pop
let stack = [];       // stack == []
stack.push(1,2);      // stack == [1,2];
stack.pop();          // stack == [1]; returns 2
stack.push(3);        // stack == [1,3]
stack.pop();          // stack == [1]; returns 3
stack.push([4,5]);    // stack == [1,[4,5]]
stack.pop()           // stack == [1]; returns [4,5]
stack.pop();          // stack == []; returns 1

// slice
let opSlice = [1,2,3,4,5];
a.slice(0,3);    // Returns [1,2,3]
a.slice(3);      // Returns [4,5]
a.slice(1,-1);   // Returns [2,3,4]
a.slice(-3,-2);  // Returns [3]

// splice
let opSplice = [1,2,3,4,5,6,7,8];
a.splice(4)    // => [5,6,7,8]; a agora é [1,2,3,4]
a.splice(1,2)  // => [2,3]; a agora é [1,4]
a.splice(1,1)  // => [4]; a agora é [1]

// indexOf e lastIndexOf
let opIndex = [0,1,2,1,0];
a.indexOf(1)       // => 1
a.lastIndexOf(1)   // => 3
a.indexOf(3)       // => -1

// sort
let opSort = ["banana", "cherry", "apple"];
a.sort(); // a == ["apple", "banana", "cherry"]

// reverse
let opReverse = [1,2,3];
a.reverse();   // a == [3,2,1]

// join
let opJoin = [1, 2, 3];
a.join()               // => "1,2,3"
a.join(" ")            // => "1 2 3"
a.join("")             // => "123"