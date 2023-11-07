const task = (arr) => {
    const res = [];
    let i = 1;
    for(const a of arr){
        for(const box of a){
            if (box.length !== 6)
                continue;
            if (box[0] !== "[" || box[5] !== "]")
                continue;
            if (box[1] !== box[2] || box[1] !== box[3] || box[1] !== box[4])
                continue;
            if (i++ % 5 === 0)
                continue;

            res.push(...box.slice(1, 5).split(""));
        }
    }
    return res.join(" ");
};

// console.log(task([
//     ["[llll]", "", "llll", "[ll@l]", "[aaaa]"], 
//     ["[llll[", "[bbbb]"],
//     ["[dddd]"],
//     ["(1111)", "[1111]", "[2222]"],
//     [],
//     ["[----]", "[++++]", "[====]"],
//     ["[yyyy]", "....", "[....", "....]", "[....]"]
// ]));
// console.log(task([]));