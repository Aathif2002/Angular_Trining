const strgList = ["aathif", "raiyan", "imaz", "waseem","talha"];
const totalLength = strgList.reduce(function(sum, current) {
     return sum + current.length;
    }, 0);
console.log(totalLength);