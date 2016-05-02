/*
Push Front
Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
*/

function PushFront(arr, val){
  // Easiest:
  // arr.unshift(val)
  // return arr

  for (var i = arr.length; i > 0; i-=1) {
    arr[i] = arr[i-1];
  }
  arr[0] = val;
  return arr;
}

// console.log(PushFront([3,4,5],6))
