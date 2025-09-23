// Move all Zeros in the end = You are given an array arr[] of non-negative integers. You have to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.


// Bruteforce =>
//  i = scans every element one by one.
//j = keeps track of where the next non-zero should be placed.

function moveZeroes(arr) {
    let n = arr.length;        // (1) store the length of array
    let j = 0;                 // (2) j = index where we will place the next non-zero element

    // Step 1: Place non-zero elements in order
    for (let i = 0; i < n; i++) {     // (3) loop through all elements
        if (arr[i] !== 0) {           // (4) check if current element is non-zero
            arr[j] = arr[i];          // (5) put this non-zero element at index j
            j++;                      // (6) move j to next position
        }
    }

    // Step 2: Fill rest with zeros
    while (j < n) {          // (7) after loop, j points to first empty slot
        arr[j] = 0;          // (8) put 0 there
        j++;                 // (9) move j forward until end
    }

    return arr;              // (10) return modified array
}

//tc= 0(n), sc=0(1)

//Optimised= two Pointers/Swap

function moveZeroesOptimized(arr) {
    let n = arr.length;      // (1) length of array
    let j = 0;               // (2) j = position for next non-zero

    for (let i = 0; i < n; i++) {     // (3) i = loop counter, scans whole array
        if (arr[i] !== 0) {           // (4) if current element is non-zero
            [arr[i], arr[j]] = [arr[j], arr[i]];  // (5) swap arr[i] with arr[j]
            j++;                      // (6) move j forward
        }
    }

    return arr;              // (7) final result
}

//tc= 0(n), sc=0(1)


