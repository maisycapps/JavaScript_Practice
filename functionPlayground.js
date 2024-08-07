const concatOdds = (a, b) => {
    let myArr = [...a, ...b];
    myArr = myArr.filter((num) => num % 2 !== 0);
    return Array.from(new Set(myArr)).sort();
}
console.log(concatOdds([2,7,9],[3,4,1]));
console.log("is an array?", Array.isArray(concatOdds([2,7,9],[3,4,1])));

const concatOdds2 = (a, b) => {
    let myArr = [...a, ...b];
    myArr = myArr.filter((num, index, arr) => num % 2 !== 0 && num !== arr.index);
    return myArr.sort();
}
console.log(concatOdds2([2,7,9],[3,4,1]));
console.log("is an array?", Array.isArray(concatOdds2([2,7,9],[3,4,1])));

