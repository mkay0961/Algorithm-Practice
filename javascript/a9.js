isValid = (s) => {
    let hash = {"(":")", "{":"}" , "[":"]"}
    let stack = []
    let array = s.split("")
    for(let i = 0; i < array.length; i++){
        stack.push(array[i])
        let l =  (stack[stack.length -2])
        let r = (stack[stack.length -1])
        if(hash[l] === r){
            stack.pop()
            stack.pop()
        }
    }
    if(stack.length === 0){
        return true
    }else{
        return false
    }

}

//valid parenthesis problem
