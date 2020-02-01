// A useful function combining map and reduce().
// John Lynch, November 2019.

function* reducemap(fmap, freduce, args) {
    let first = true;
    let res;
    for (const arg of args) {
        if (first) {
            res = fmap(arg);
            first = false;
        }
        else {
            res = freduce(res, fmap(arg));
        }
        yield res;
    }
}

res = [...reducemap(x => x * x, (x, y) => x + y, [2,3,5,7,11,13,17,19])]
// [
//    4,   13,  38,
//   87,  208, 377,
//  666, 1027
// ]