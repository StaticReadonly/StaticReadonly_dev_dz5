const task = (arr) => {
    let left = 0,
        right = 0;

    let i = 0;
    for(; i < arr.length; i++){
        left += arr[i];
    }
  
    let res = -1;
  
    for(;--i >= 0;){
        left -= arr[i];
        if (left === right)
            res = i;
        right += arr[i];
    }

    return res;
};

// console.log(task([1,2,3,2,1]))
// console.log(task([0,0,0]))
// console.log(task([100,1,50,50]))
// console.log(task([-50,-1,1,1,-20,-5,-15,-10,1,-1]))
// console.log(task([1,2,2,1]))
// console.log(task([-1,1,-1,1]))
// console.log(task([1,2,3,4,5,6,7,8,9]))
// console.log(task([9,8,7,6,5,4,3,2,1]))
// console.log(task([1,2,3,2,4,1,1]))
// console.log(task([1,2,3,4,3,2,2,3,4,3,2,1]))
//console.log(task([0,0,0,0,0]))