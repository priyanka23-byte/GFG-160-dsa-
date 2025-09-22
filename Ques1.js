//problem = Given an array of positive integers arr[], return the SECOND LARGEST ELEMENT from the array. If the second largest element doesn't exist then return -1.
 // solution= bruteforce(sorting)

 function secondLargest(arr) {
  if (arr.length < 2) return -1; // not enough elements

  arr.sort((a, b) => b - a); // sort descending

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return arr[i]; // first different element
    }
  }

  return -1; // no second largest found
}
// tc= Sorting = O(n log n), sc= 0(1);


// optimise solution

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let largest = -1;
  let secondLargest = -1;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}


//tc= 0(1), SC = 0(1);