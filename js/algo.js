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

/*
Szélsőérték keresés algoritmus
*/

let biggest = numericArray[0]
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest =numericArray[i]
    }
}
console.log("The biggest element: ", biggest);

/*
Eldöntés tétele
*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++)
if (numericArray[i] == 5) {
    contains = true
}
console.log ("The disarray contains 5: ",contains)