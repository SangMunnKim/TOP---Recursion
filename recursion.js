//fibonacci iteratively
function fibonacciIteration(n) {
    let result = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(a);
            continue;
        }

        if (i === 1) {
            result.push(b);
            continue;
        }

        let c = b;
        b = b + a;
        a = c;
        result.push(b);
    }
    return result;
}

//fibonacci recursively
function fibonacciRecursion(n) {
    // Base cases
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    // Recursive call
    const fibArray = fibonacciRecursion(n - 1);
    
    // Calculate the next Fibonacci number and add it to the array
    const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(nextFib);
    
    return fibArray;
}

let fibArray = fibonacciRecursion(8);
console.log(fibArray); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
