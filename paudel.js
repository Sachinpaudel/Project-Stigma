// function sum(a, b) {
//     return a + b;
// }
// document.write(sum(5, 10));

// console.log("This is a message in the console.");

// function to find sum from 1 to any number
let n = prompt("Enter a number:");
function sum(n){
    let total = 0;
    let i;
    for(i=0; i<=n; i++){
        total = total + i;
    }
    return total;
}
document.write(sum(n));
