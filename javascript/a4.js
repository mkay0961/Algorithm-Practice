function isValidIP(str) {
  let numArray = str.split(".")

  if(str === "" ||  numArray.length !== 4){
    return false
  }

  for(let el of numArray){
    if(el.match(/[a-z]/i) || parseInt(el) < 0 || parseInt(el) > 255 || /\s/.test(el) || (el[0] === "0" && el.length > 1) || el ===  ""){
        return false
    }
  }
  return true

}


  console.log(isValidIP("0.0.0.0"))
  console.log(isValidIP("12.255.56.1"))
  console.log(isValidIP("137.255.156.100"))
  console.log(isValidIP(''))
  console.log(isValidIP('abc.def.ghi.jkl'))
  console.log(isValidIP('123.456.789.0'))
  console.log(isValidIP('12.34.56'))
  console.log(isValidIP('01.02.03.04'))
  console.log(isValidIP('256.1.2.3'))
  console.log(isValidIP('1.2.3.4.5'))
  console.log(isValidIP('123,45,67,89'))
  console.log(isValidIP('1e0.1e1.1e2.2e2'))
  console.log(isValidIP(' 1.2.3.4'))
  console.log(isValidIP('1.2.3.4 '))
  console.log(isValidIP('12.34.56.-7'))
  console.log(isValidIP('1.2.3.4\n'))
  console.log(isValidIP('\n1.2.3.4'))
