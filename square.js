const array=[1,3,0,2,5,4];
let sum = 0;
function sumOfsquare(arr){
    for (const e of arr) {
        sum = sum + e * e;
    }
    return sum;
}
result=sumOfsquare(array);
console.log(result);