const task = (str) => {
    s = str.split(' ');
    let low = Number.MAX_VALUE;
    let high = -Number.MAX_VALUE;
    for(const i of s){
        const j = parseInt(i);
        if (j < low) low = i;
        if (j > high) high = i;
    }
    return high + ' ' + low;
};

// console.log(task("1 2 3 4 5"));
// console.log(task("-1 -2 -3 -4 -5"));
// console.log(task("3 9 5 6 8 2 3"));
// console.log(task("3 -4 2 -7 9 8 -2 4 -1 -100 2 300"));
// console.log(task("4 5 6 -4 -5 -6"));