//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


function diagonalDifference(arr) {
    // Write your code here
    let leftDif = 0
    let rightDif = 0
    let lCount = 0
    for(let y1 in arr){
        leftDif += parseInt(arr[y1][lCount])
        lCount+=1
    }
    let rCount = arr.length -1
    for(let y2 in arr){
        rightDif += parseInt(arr[y2][rCount])
        rCount-=1
    }

    return Math.abs(leftDif - rightDif)

}
