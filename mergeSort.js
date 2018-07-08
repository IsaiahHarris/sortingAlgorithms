function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }
  var arr1 = arr;
  var arr2 = arr1.splice(0, Math.ceil(arr1.length / 2));
  return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
 while(arr1.length){
   result.push(arr1.shift())
 }
 while(arr2.length){
   result.push(arr2.shift())
 }
  return result;
}



console.log(mergeSort([9, 3, 2, 5, 11, 13, 6, 12]));