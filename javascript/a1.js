// John works at a clothing store. He has a large pile of socks that he must pair
// by color for sale. Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.
//
// For example, there are  socks with colors . There is one pair of color
// and one of color . There are three odd socks left, one of each color. The
// number of pairs is .
//
//
// Function Description

// Complete the sockMerchant function in the editor below.
// It must return an integer representing the number of matching pairs of
// socks that are available.

// sockMerchant has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock

sockMerchant = (n , ar) =>{
  let countPairs = 0
  let obj = {}
  for(let el of ar){

    if(obj[el]){
      obj[el] += 1
    }else{
      obj[el] = 1
    }

  }

  for(let key in obj){
    if(obj[key] >= 2){
      countPairs += Math.floor(obj[key] / 2 )
    }
  }
  return countPairs

}

//tests
console.log(sockMerchant(7, [1,2,1,2,1,3,2]) === 2)
console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]) === 3)
