//roman numeral  to number


romanToInt = (s) => {
    let numbers = s.split("")
    let rtn = 0
    for(let index = 0; index<numbers.length; index ++){
        console.log(index)
        let cur = numbers[index]
        let next = numbers[index + 1]
        if(cur === "I"){
            console.log(next)
            if(next === "V"){
                rtn += 4
                index = index + 1
            }else if(next === "X"){
                rtn += 9
                index = index + 1
            }else{
                rtn +=1
            }
        }else if(cur === "V"){
            rtn += 5

        }else if(cur === "X"){
            if(next === "L"){
                rtn += 40
                index = index + 1
            }else if(next === "C"){
                rtn += 90
                index = index + 1
            }else{
                rtn +=10
            }

        }else if(cur === "L"){
            rtn +=50

        }else if(cur === "C"){
            if(next === "D"){
                rtn += 400
                index = index + 1
            }else if(next === "M"){
                rtn += 900
                index = index + 1
            }else{
                rtn +=100
            }

        }else if(cur === "D"){
            rtn +=500

        }else if(cur === "M"){
           rtn +=1000

        }
    }
    return rtn
}
