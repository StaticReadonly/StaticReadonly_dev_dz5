const task = (num) => {
    if (num <= 1)
        return false;
    if (num == 2)
        return true;
    if (!(num % 2))
        return false;

    let i = 3;
    while(i < Math.trunc(num / 2)){
        if (!(num % i))
            return false;
        i += 2;
    }

    return true;
};

// console.log(task(1));
// console.log(task(2));
// console.log(task(3));
// console.log(task(4));
// console.log(task(5));
// console.log(task(6));
// console.log(task(7));
// console.log(task(9));
// console.log(task(11));
// console.log(task(12));
// console.log(task(15));
// console.log(task(17));