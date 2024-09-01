const array=[1,3,6,7,8,9,4,1,3,3,4,4,4,4]

function frequent_item(arr) {
    arr.sort((a, b) => a - b);
    let count = 1,
    max = 0,
    el;

for (let i = 0; i <=arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        count++;
    } else {
        count = 1;
    }
    if (count > max) {
        max = count;
        el = arr[i];
    }
}
console.log("The most occured element is: " + el);
}
frequent_item(array);


