// Reverse an Array=You are given an array of integers arr[]. You have to reverse the given array.

//bruteforce approach 

function reverseArray(arr){
    let n= arr.length;
    let temp =[];

    for (let i=n-1; i>= 0; i-- ){
        temp.push(arr[i]);
    }
    return temp;
    
}
console.log(reverseArray([5,4,7,2,1]));

// tc= (n), sc = 0(n)

//optimised approach = two pointer approach;

// function reverseArray(arr){
//     let i =0;
//     let j= arr.length-1;

//     while(i<j){
//         [arr[i], arr[j]]= [arr[j],arr[i]];
//         i++;
//         j--;

//     }
//     return arr;
// }

// //
