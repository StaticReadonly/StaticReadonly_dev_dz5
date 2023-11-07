const task = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === "O")
                continue;

            if (i !== 0 && j !== 0){
                if (arr[i-1][j] === "O" && arr[i][j-1] === "O")
                    res += 4;
                else if (arr[i-1][j] === "X" && arr[i][j-1] === "X")
                    continue;
                else
                    res += 2;
            }
            else{
                if (i === 0 && j === 0)
                    res += 4;
                else if (i === 0){
                    if (arr[i][j-1] === "X")
                        res += 2;
                    else
                        res += 4;
                }
                else{
                    if (arr[i - 1][j] === "X")
                        res += 2;
                    else
                        res += 4;
                }
            }  
        }
    }
    return "Total land perimeter: " + res;
};

// console.log(task(
//     [
//         "OOOO", 
//         "XOOX", 
//         "XXOX", 
//         "OXXX"
//     ]
// ));
// console.log(task(
//     [
//         "OXOOO", 
//         "OOXXX", 
//         "XOOXO", 
//         "XXOOO", 
//         "OOOXX"
//     ]
// ));
// console.log(task(
//     [
//         "XOOXO",
//         "XOOXO",
//         "OOOXO",
//         "XXOXO",
//         "OXOOO"
//     ]
// ));
// console.log(task(
//     [
//         "XOOO",
//         "XOXO",
//         "XOXO",
//         "OOXX",
//         "OOOO"
//     ]
// ));