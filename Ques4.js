//ROTATE THE ARRAY=
// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.
// Note: Consider the array as circular.

// breuteforce approach;

function leftRotate(arr, d) {
  let n = arr.length;
  d = d % n; // in case d > n

  for (let i = 0; i < d; i++) {
    let temp = arr[0]; // store first element
    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1]; // shift left
    }
    arr[n - 1] = temp; // put stored element at end
  }
  return arr;
}

// Example
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotate(arr1, 2));

//tc=0(n*d); sc=0(1)

// REVERSE ALGORITHIM

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function leftRotateReversal(arr, d) {
  let n = arr.length;
  d = d % n;

  // Step 1: Reverse first d elements
  reverse(arr, 0, d - 1);

  // Step 2: Reverse remaining n-d elements
  reverse(arr, d, n - 1);

  // Step 3: Reverse whole array
  reverse(arr, 0, n - 1);

  return arr;
}

// Example
let arr3 = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotateReversal(arr3, 2)); // [3, 4, 5, 6, 7, 1, 2]


