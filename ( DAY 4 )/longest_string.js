const stringList = ["mohammed", "aathif", "boobathy", "rahul","vinoth","shalini"];
const longestString = stringList.reduce(function(longest, current) {
    return longest.length > current.length ? longest : current;
});
console.log(longestString);