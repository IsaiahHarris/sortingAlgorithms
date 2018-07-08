function quickSort(arr) {


  if (arr.length <= 1) {
    return arr;
  } else {
    let pivot = arr.shift();
    let left = [];
    let right = [];
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i])
      }
    }
    // console.log(left);
    // console.log(right);
    return sortedArr .concat(quickSort(left), pivot, quickSort(right));

  }

}



let sorted = quickSort([9, 3, 2, 5, 4, 6, 12]);
console.log(sorted);