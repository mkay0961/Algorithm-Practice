isValid = (s) => {
    let count = 0
    for(let chr of s){
        if(chr === "(" || chr === "{" || chr === "[" ){
            count += 1
        }else if(chr === ")" || chr === "}" || chr === "]" ){
            count -= 1
        }
    }
    console.log(count)
    if(count === 0 ){
        return true
    }else{
        return false
    }

}

//valid parenthesis problem
