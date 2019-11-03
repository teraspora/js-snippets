// Range fn for js
         

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


// Colour logging function:
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
let inc = (_ => (i = 0, _ => i++))();

// Range functions
const range = (a, b) => a > b ? range(b, a).reverse() : (a == b ? [a] : range(a, b-1).concat(b));

const rangeAlt = (a, b) => a < b ? Array(b - a + 1).fill().map((_ => (i = a, _ => i++))()) : a == b ? [a] : rangeAlt(b, a).reverse();

const rangex = (m, n) => [...function* (p, q) {
    while (p < q) yield p++;
}(m, n)];

function r(n) {
    const t0 = process.hrtime();
    const t0n = t0[0] + t0[1] * 1e-9;
    for (const i of range(0, n)) {
        ;
    }
    const t1 = process.hrtime();
    const t1n = t1[0] + t1[1] * 1e-9;
    for (const i of rangeAlt(0, n)) {
        ;
    }
    const t2 = process.hrtime();
    const t2n = t2[0] + t2[1] * 1e-9;
    for (const i of rangex(0, n)) {
        ;
    }
    const t3 = process.hrtime();
    const t3n = t3[0] + t3[1] * 1e-9;
    return [t1n - t0n, t2n - t1n, t3n - t2n]
}
[rtime, ratime, rxtime] = r(5000);
console.log(`\nRangeAlt: ${parseFloat(rtime).toFixed(4)}, Range: ${parseFloat(ratime).toFixed(4)}\n, Rangex: ${parseFloat(rxtime).toFixed(4)}\n`);

// JQuery to collapse Bootstrap navbar appropriately
$(".navbar-nav li a").on("click", _ => {
   $(".navbar-collapse").collapse("hide");
});

parseFloat(rtime).toFixed(2)

let fizzbuzz = n => (n % 3 == 0 || n.toString().includes(`3`) 
        ? (n % 5 == 0 || n.toString().includes(`5`) ? `fizz-buzz` : `fizz`)
        : n % 5 == 0 || n.toString().includes(`5`) ? `buzz` : parseInt(n));

// Not js, but anyway...
echo "<\!DOCTYPE html>\n<html lang="en"> \n\n<head>\n    <meta charset="UTF-8">\n    <title></title>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="author" content="">\n    <link rel="stylesheet" type="text/css" href="css/main.css">\n</head> \n\n<body>\n    \n</body>\n</html>" > index.html



// osho - fuck - https://www.youtube.com/watch?v=e2AtyJKr0RA

// audio stuff...

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        // MIC INPUT CODE
        const constraints = {audio: true};
        (MediaDevices || navigator || navigator.mediaDevices).getUserMedia(
            constraints, processStream, err => console.log(`Error: ${err.name} - ${err.message}`)
        );
        let context, mic, analyser;

        function processStream(stream) {
            console.log(stream);
            context = new AudioContext();
            mic = context.createMediaStreamSource(stream);
            analyser = context.createAnalyser();
            mic.connect(analyser);
            // mic.connect(context.destination);   
        }
    }
}

// ===============================================================================================

bar = ((m, n) => [...function* (p, q) {
    while (p < q) yield p * ++p;
}(m, n)])(0, 8)






const xs = [];
const ys = [];
document.addEventListener("dragover", ev => {
    ev = ev || window.event;
    xs.push(ev.pageX);
    ys.push(ev.pageY);
}, false);


// Bookmarlets:

javascript:Object.assign(document.body.style, {backgroundColor: `#000`, color: `#fca`}); void(0);

javascript:Object.assign(document.body.style, {backgroundColor: `#000`, color: `#fca`}); void(0);

// Select elements:

function outline_elements() {
    els = [...(document.body.querySelectorAll(`body > *, body > * > *, body > * > * > *`))];
    els.forEach(elem => { Object.assign(elem.style, {border: `1px solid #f00`}); });
}
outline_elements();
