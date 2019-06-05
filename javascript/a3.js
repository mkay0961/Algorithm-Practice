//Find the largest hourGlass


hourglassSum = (arr) => {
  let largest = 0
    for( let i=0; i < arr.length; i++){
        for( let  k=0; k < arr[i].length; k++){
          // console.log(i,k);
            if(i >= 1 && i < arr.length -1 && k >= 1 && k < arr[i].length -1){

              let hourGlass = arr[i-1][k-1] + arr[i-1][k] + arr[i-1][k+1] + arr[i][k] + arr[i+1][k-1] + arr[i+1][k] + arr[i+1][k+1]
              if(hourGlass > largest){
                largest = hourGlass
              }
            }
        }
    }
    return largest

}
console.log(hourglassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,9,2,-4,-4,0], [0,0,0,-2,0,0],[0,0,-1,-2,-4,0]])
)
