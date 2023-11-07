const task = (num) => {
    if (num < 0)
        return 0;

    let res = 0;
    while (num >= 3){
        if (num % 3 == 0 || num % 5 == 0)
            res += num;
        num--;
    }
    return res;
};

// console.log(task(-1));
// console.log(task(2));
// console.log(task(3));
// console.log(task(3));
// console.log(task(4));
// console.log(task(5));
// console.log(task(6));
// console.log(task(9));
// console.log(task(10));
// console.log(task(11));
// console.log(task(12));
// console.log(task(15));
// console.log(task(30));