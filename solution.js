/*
Problem:
Given a list of integers S and a target number k, write a function that returns a
subset of S that adds up to k. If such a subset cannot be made, then return null.
Integers can appear more than once in the list. You may assume all numbers in the list
are positive.
For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it
sums up to 24.
*/

const numberArr = [1, 12 ,61, 5, 9, 78, 19]


function getSumArray(target, arr){
  
  const sortedArr = arr.sort((a, b) => a - b).filter(el=> el<=target)
  const sumOfSubArray = sortedArr.reduce((total, el)=> total+=el)
  
  const result = []
  
  sortedArr.forEach(el=> {
    if ((target+el)-sumOfSubArray == 0) {
      result.push(sortedArr.filter(element=> element!=el))    
    }
  })
  
  return result
}

// driver code, 
console.log(numberArr,"-->",getSumArray(18, numberArr))
