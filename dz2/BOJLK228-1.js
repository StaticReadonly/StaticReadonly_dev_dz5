const task = (arr, num) => {
    const step = arr.length / num;
    const res = Array(step).fill(0);
    for(let i = 0; i < arr.length; i++){
        res[i % step] += arr[i];
    }
    return Math.max(...res);
};

// console.log(task([1,2,3,4], 2));
// console.log(task([1,5,6,3,4,2], 3));
// console.log(task([1,1,0],1));
// console.log(task([-2,3,-2,0,0,5,2,1,4], 3));
// console.log(task([-2,3,-2,1,2], 5));
// console.log(task([-2,3,-2,1,2,0,-1,-1,4,3], 5));