const task = (num, obj) => {
    for (const i in obj){
        if (obj[i] === num)
            return i;
        if (typeof obj[i] === "object"){
            const n = task(num, obj[i]);
            if (n)
                return i;
        }
    }
    return null;
};



// console.log(task(3, {
//     "aboba":{
//         "amogus":{
//             "sus":{
//                 "a": "a",
//                 "b" : "b",
//                 "c" : "c"
//             }
//         },
//         "ppp":{
//             "a":"a",
//             "b":[1,2],
//             "c":"c"
//         }
//     },
//     "aaa":{
//         "ddd":{
//             "ppp":"ooo",
//             "[[[":[5,966,5974,6,654897,394,3]
//         }
//     }
// }));

// console.log(task(1, {
//     "aaa": "aa",
//     "ccc": {
//         "ddd": "eee",
//         "fff": "ggg",
//         "uuu": [5,4,3,2]
//     },
//     "aboba": [2,3,1]
// }));

// console.log(task(1, {

// }));

// console.log(task(1, {
//     "aaa":{
//         "bbb":{

//         },
//         "ccc":{
//             "ddd":{

//             }
//         }
//     },
//     "eee":{
//         "fff":{
//             "rrr":[9,9,9,9,9,9]
//         }
//     }
// }));