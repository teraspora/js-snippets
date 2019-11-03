// My process of deriving it:

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

// Or, if we eschew spaces:
let fac=(_=>(i=f=1,_=>f*=i++))();

const range = (a, b) => a > b ? range(b, a).reverse() : (a == b ? [a] : range(a, b-1).concat(b));

const rangeAlt = (a, b) => a < b ? Array(b - a).fill().map((_ => (i = a, _ => i++))()) : a == b ? [a] : rangeAlt(b, a).reverse();
