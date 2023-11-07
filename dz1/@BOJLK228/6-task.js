const task = (num) => {
    const arr = [];
    while (num > 0){
        arr.push(num % 10);
        num = Math.trunc(num / 10);
    }
    arr.sort();
    r = 1;
    let res = 0
    for(const i of arr){
        res += i * r;
        r *= 10;
    }
    return res;
};

// console.log(task(12543));
// console.log(task(44533787));
// console.log(task(5737));
// console.log(task(113132));
// console.log(task(898664));
// console.log(task(4436));
// console.log(task(93989));