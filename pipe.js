// Javascript: pipe() function
// {author: `John Lynch`, date: `2020-06-01`}
// Useful function providing syntactic sugar to make
// function composition more readable. 
// pipe() function implements similar functionality to 
// the forthcoming pipeline operator |> (currently in Stage 1).

let pipe = (val, ...args) => args.reduce((x, y) => y(x), val);