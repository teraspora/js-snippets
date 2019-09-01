// Javascript Array Methods and Properties
// Author:  John Lynch
// Date:  July 2019

// The code below shows simple cases of these methods.
// Most can take a final argument that will be assigned
// as the value of this in a callback function

/*

Array.from('some-string') .isArray()
 .of()
 .concat()
 .copyWithin()
 .entries()
 .every()
 .fill()
 .filter()
 .find()
 .findIndex()
 .flat()
 .flatMap()
 .forEach()
 .includes()
 .indexOf()
 .join()
 .keys()
 .lastIndexOf()
 .map()
 .pop()
 .push()
 .reduce()
 .reduceRight()
 .reverse()
 .shift()
 .slice()
 .some()
 .sort()
 .splice()
 .toLocaleString()
 .toSource()
 .toString()
 .unshift()
 .values()

*/

Array.from('some-string');
(11) ["s", "o", "m", "e", "-", "s", "t", "r", "i", "n", "g"]
Array.from([2, 3, 5, 7], x => x + 1);
(4) [3, 4, 6, 8]

// ---

Array.isArray(42);
false
Array.isArray(`some-string`);
false
Array.isArray([2, 3, 5, 7]);
true

// --- 

let arr = Array.of(2, 3, 5, 7);
undefined
arr
(4) [2, 3, 5, 7]
arr = Array.of(2); 
[2]     // Note difference with using constructor, below...
let brr = Array(2);
undefined
brr
(2) [empty × 2]    
// With just one integer arg, the constructor gives us an array of that length
// whereas > 1 arguments are treated as elements
brr.length;
2
// So, give the constructor more arguments...
undefined
let crr = Array(2, 3);
undefined
crr
(2) [2, 3]

// --- 

arr = [2, 3, 5, 7].concat([1, 2, 6, 24]);
(8) [2, 3, 5, 7, 1, 2, 6, 24]
arr
(8) [2, 3, 5, 7, 1, 2, 6, 24]

// --- 

arr = [2, 3, 5, 7];
(4) [2, 3, 5, 7]
arr_iter = arr.entries();
Array Iterator {}
// returns a new Array Iterator object that contains
// the key/value pairs for each index in the array.
let a0 = arr_iter.next();
undefined
a0
{value: Array(2), done: false}
done: false
value: (2) [0, 2]
__proto__: Object

let a1 = arr_iter.next();
undefined
a1
{value: Array(2), done: false}
done: false
value: (2) [1, 3]
__proto__: Object

let a2 = arr_iter.next();
undefined

let a3 = arr_iter.next();
undefined
a3
{value: Array(2), done: false}
done: false
value: (2) [3, 7]
__proto__: Object

let a4 = arr_iter.next();
undefined
a4      // Notice value now undefined, not a key/value pair, and done is true
{value: undefined, done: true}

// --- 

arr = [2, 3, 5, 7];
(4) [2, 3, 5, 7]
arr_iter = arr.values();
Array Iterator {}
a0 = arr_iter.next();
{value: 2, done: false}

// So, entries() gives an iterator with key/value pairs [index, element],
// while values() gives an iterator with just the elements

// --- 

[2, 3, 5, 7].every(x => x < 8);
true
[2, 3, 5, 7].every(x => x < 6);
false

[2, 3, 5, 7].some(x => x < 6);
true
[2, 3, 5, 7].some(x => x < 0);
false

// --- 

[2, 3, 5, 7].filter(x => x < 6);
(3) [2, 3, 5]

[`Apple`, `Flour`, `Coffee`, `Fennel`, `Potato`].filter(food => food.startsWith(`F`));
(2) ["Flour", "Fennel"]

// The function supplied to filter() may also take more args:  see
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// --- 

[2, 3, 5, 7].find(el => el > 4);
5
// Returns the first element that the function returns true for

[2, 3, 5, 7].findIndex(el => el > 4);
2
// Returns the index of the first element that the function returns true for

// --- 

[2, 3, [5, 7, 11]].flat()
(5) [2, 3, 5, 7, 11]

console.dir([2, 3, [5, [7, 11]]].flat());
VM2684:1 Array(4)
0: 2
1: 3
2: 5
3: (2) [7, 11]
length: 4
__proto__: Array(0)

console.dir([2, 3, [5, [7, 11]]].flat(2));
// The optional argument specifies how deep to flatten it; default 1 (level deep)
VM2751:1 Array(5)
0: 2
1: 3
2: 5
3: 7
4: 11
length: 5
__proto__: Array(0)

// --- 

[2, 3, 5, 7].forEach(x => console.log(x * x));
4
9
25
49
undefined

[2, 3, 5, 7].map(x => x * x);
(4) [4, 9, 25, 49]

// --- 

[2, 3, 5, 7].includes(3);
true
[2, 3, 5, 7].includes(23);
false

// --- 

[`Apple`, `Flour`, `Coffee`, `Fennel`, `Potato`].indexOf("Coffee");
2

// --- 

[`Apple`, `Flour`, `Coffee`, `Fennel`, `Potato`].join(`, `);
"Apple, Flour, Coffee, Fennel, Potato"

// --- 

[`Apple`, `Flour`, `Coffee`, `Flour`, `Potato`].indexOf(`Flour`);
1
[`Apple`, `Flour`, `Coffee`, `Flour`, `Potato`].lastIndexOf(`Flour`);
3

// --- 

[2, 3, 5, 7].reduce((x, y) => x + y);
17

[2, 3, 5, 7].reduce((x, y) => x + y, 1000);
1017

[3, 1, 3, 2].reduce((x, y) => x ** y);
729
[3, 1, 3, 2].reduceRight((x, y) => x ** y);
512

// --- 

brr = [8, 3, 5, 7].slice(2);
(2) [5, 7]
brr = [8, 3, 5, 7].slice(2, 3);
[5]

// --- 

let crri = crr[Symbol.iterator]()
undefined
crri.next();
{value: "Tea", done: false}


















// Omitted:
copyWithin(); fill(); flatMap(); keys(); toSource()

// Mutating
push(); pop(); reverse(); shift(); unshift(); sort(); splice(); 

arr = [`Apple`, `Flour`, `Coffee`, `Flour`, `Potato`];
(5) ["Apple", "Flour", "Coffee", "Flour", "Potato"]

arr.sort();
(5) ["Apple", "Coffee", "Flour", "Flour", "Potato"]
arr
(5) ["Apple", "Coffee", "Flour", "Flour", "Potato"]

arr = [`Tea`, `Cucumber`, `Apple`, `Flour`, `Coffee`, `Potato`];
(6) ["Tea", "Cucumber", "Apple", "Flour", "Coffee", "Potato"]

arr.sort((a, b) => a.length - b.length);
(6) ["Tea", "Apple", "Flour", "Coffee", "Potato", "Cucumber"]

// --- 

crr = ["Tea", "Apple", "Flour", "Coffee"];
(4) ["Tea", "Apple", "Flour", "Coffee"]

crr.splice(2, 1, "Thyme");   // Note: overwrites elements, and returns the removed elements
["Flour"]

crr
(4) ["Tea", "Apple", "Thyme", "Coffee"]

// --- 

crr
(4) ["Tea", "Apple", "Thyme", "Coffee"]

crr.toLocaleString()
"Tea,Apple,Thyme,Coffee"
crr.toString()
"Tea,Apple,Thyme,Coffee"

// --- 



