// Range fn for js
const range = (a, b) => a>b ? range(b, a).reverse() : (a==b ? [a] : range(a, b-1).concat(b));

const veg = {name: 'Garlic', genus: `Allium`, species: 'sativum', props: ['bulb', 'hardy', 'store']};


function createHtmlList(items) {
return `<ul>\n${items.map(item => `<li>${item}</li>`).join('\n')}\n</ul>`;}

const html = `
<div class="veg">
    <h2>${veg.name}</h2>
    <p class="genus">${veg.genus}</p>
    <p class="species">${veg.species}</p>
    ${createHtmlList(veg.props)}
</div>
`;

document.body.innerHTML = html;

// use Object.keys(veg) to get array of keys

var a = typeof(Object.values(veg)[0])
undefined
a
"string"
var a = typeof(Object.values(veg)[2])
undefined
a
"string"
var a = typeof(Object.values(veg)[3])
undefined
a
"object"
var n = typeof(54)
undefined
n
"number"

-------------------------------------------------

document.getElementById('testid').setAttribute("src", "namedImage42.jpg");   

Make functions dynamically:

> for (i = 0; i < 8; i++) {
... let code = `let mult${i} = x => ${i} * x`;
... console.log(code);
... eval.call(code); // call indirectly to invoke global scope
... }
let mult0 = x => 0 * x
let mult1 = x => 1 * x
let mult2 = x => 2 * x
let mult3 = x => 3 * x
let mult4 = x => 4 * x
let mult5 = x => 5 * x
let mult6 = x => 6 * x
let mult7 = x => 7 * x
undefined
> mult5
[Function: mult5]
> mult5(7);
35


const log = msg => {
    let col;
    switch (msg[0].toLowerCase()) {
        case "r":
            col = `#ff0000`;
            break;
        case "g":
            col = `#00ff00`;
            break;
        case "b":
            col = `#0000ff`;
            break;
        case "c":
            col = `#00ffff`;
            break;
        case "m":
            col = `#ff00ff`;
            break;
        case "y":
            col = `#ffff00`;
            break;
    }
    console.log(`%c${msg.slice(1)}`, `color: ${col};`);
}

// Create a function, `func_factory`, that takes a single argument and returns a function that closes over that argument and logs it to the console.

func_factory = i => (_ => console.log(`Value = ${i}`));

// Now invoke this function and store the result (an instance of the logging function):

let f = func_factory(729);

// Now invoke this function:

f();

// As expected, it logs
// `Value = 729`
// to the console.

// Create a function, `func_factory`, that takes a single argument and returns a function that increments it and logs it to the console.

let factory = _ => {
    i = 0;
    return _ => console.log(`Value = ${i++}`);
}

let inc = factory();

inc();  // Repeated calls log successive integers

// Now use this closure technique to make a function that returns successive factorials upon each successive invocation:
 
// This works:
let factorial = _ => {
    let [i, fact] = [0, 1];
    return _ => (i++, fact = fact * i);
}

// And this works too:
factorial = _ => {
    return ([i, fact] = [0, 1],_ => (i++, fact = fact * i));
}

// And even this works!   Note we need the parentheses to group the expressions separated by the comma operator. 
factorial = _ => ([i, fact] = [0, 1],_ => (i++, fact = fact * i));


// Finally...
let fac = (_ => ([i, f] = [0, 1], _ => f *= ++i))();
/*
fac();
1
fac();
2
fac();
6
fac();
24
fac();
120
*/
// And even shorter: ;)
let fac = (_ => (i = f = 1, _ => f *= i++))();

