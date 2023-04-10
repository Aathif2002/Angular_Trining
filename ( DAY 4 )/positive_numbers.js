const numbers = [-54, 36, -20, 15, -66, -99, 11, -76];
const positiveNumbers = numbers.map(num => {
 if(num < 0) {
    return -num;
 }
    return num;
});
console.log(positiveNumbers);