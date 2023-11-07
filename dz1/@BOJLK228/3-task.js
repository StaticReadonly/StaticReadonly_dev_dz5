const task = (m) => {
    if (m < 0)
        return -1;

    let n = 1;
    let res = 0;
    while(m > 0){
        next = Math.pow(n++, 3);
        if (next > m)
            return -1;
        m -= next;
        res++;
    }
    return res;
};

// console.log(task(1));
// console.log(task(3));
// console.log(task(9));
// console.log(task(36));
// console.log(task(35));
// console.log(task(225));
// console.log(task(441));
// console.log(task(439));
// console.log(task(1071225));
// console.log(task(91716553919377));