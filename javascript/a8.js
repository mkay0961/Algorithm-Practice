 longestCommonPrefix = (strs) => {
   let smallest = strs[0]
   for(let str of strs){
       if(str.length < smallest.length){
           smallest = str
       }
   }
   let longestSub = ""
   let string = ""
   for(let i = 0; i < smallest.length; i++){
       string += smallest[i]
       console.log(string)
       let cond = strs.map((el)=>{
           return el.includes(string)
       })
       if(!cond.includes(false)){
           longestSub = string
       }
   }
   console.log(strs, longestSub)
   return longestSub
}
