const task = (arr) => {
    const res = [];
    const map = new Map();
    let i = 0;
    for(const str of arr){
        const sorted = str.split("")
                        .sort()
                        .join("");
        
        if (map.has(sorted)) {
            res[map.get(sorted)].push(str);
        }
        else {
            map.set(sorted, i);
            res[i++] = [str];
        }
    }
    return res;
};

// console.log(task(["abc", "efg", "cab", "bca"]));
// console.log(task([]));
// console.log(task(["123", "321", "213", "132"]));
// console.log(task(["abc", "abc", "abc", "abc"]));
// console.log(task(["abc", "def", "ghi", "jkl"]));
// console.log(task(["aba", "bab", "aba", "bab"]));
// console.log(task(["a a", "aa", "aa ", " aa"]));
// console.log(task(["abc", "def", "cab", "fde"]));