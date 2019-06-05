// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention
// to small details like topography. During his last hike he took exactly  steps.
//  For every step he took, he noted if it was an uphill, , or a downhill,  step.
//  Gary's hikes start and end at sea level and each step up or down represents a
//  unit change in altitude. We define the following terms:
//
//  A mountain is a sequence of consecutive steps above sea level, starting
//  with a step up from sea level and ending with a step down to sea level.
//
//  A valley is a sequence of consecutive steps below sea level, starting
// with a step down from sea level and ending with a step up to sea level.
//
// Given Gary's sequence of up and down steps during his
// last hike, find and print the number of valleys he walked through.
// For example, if Gary's path is [DDUUUUDD],
// he first enters a valley 2 units deep. Then he climbs out an up onto a mountain
// 2 units high. Finally, he returns to sea level and ends his hike.
//
// Function Description
// Complete the countingValleys function in the editor below. It must
// return an integer that denotes the number of valleys Gary traversed.
// countingValleys has the following parameter(s):
//
// n: the number of steps Gary takes
// s: a string describing his path

countingValleys = (n , s) => {
  let elivation = 0
  let count = 0

  for(let index in s){
    if (s[index] === 'D') {
      elivation -= 1
    }else if (s[index] === 'U'){
      elivation += 1
    }
    if(elivation === 0 && s[index] === 'U'){
      count += 1
    }
  }
  return (count);


}

//tests
console.log(countingValleys(8, "UDDDUDUU") === 1)
console.log(countingValleys(10, "UDUUUDUDDD") === 0)
console.log(countingValleys(12, "DDUUDDUDUUUD") === 2)
