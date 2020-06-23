/*
Összegzés algoritmusa
*/

let numericArray = [2, 6, 8, 4 , 1, 7, 5];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ",sum);

/*
számlálás algoritmusa
*/

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] % 2 == 0) {
        db++
    }
}
console.log("Even numbers: ", db);