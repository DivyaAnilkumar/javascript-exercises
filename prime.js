const array = [4, 2, 3, 5, 6];
const firstElement = array[0];
function prime(n) {
    let flag = 0;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            flag = 1;
            break;
        }

    }

    if (flag == 1) {
        console.log(n+' is not a prime number');
    } else {
        console.log( n+' is a  prime number');
    }
}


prime(firstElement);
