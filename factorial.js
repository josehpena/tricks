'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */

function factorial(n){
        var acumula = 1;
        for(let x=n;x>1;x--) {
          acumula = acumula * x;
        }
        return acumula;
      }


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
