 longestCommonPrefix = (strs) => {
    let smallest = strs[0]
    for(let str of strs){
        if(str.length < smallest.length){
            smallest = str
        }
    }

    console.log(strs, smallest)
}
