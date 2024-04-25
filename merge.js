function mergeSort(inputArray) {

  const length = inputArray.length;
  if (length <= 1) {
    return inputArray;
  }
  const mid = Math.floor(length / 2);
  const leftArray = inputArray.slice(0, mid);
  const rightArray = inputArray.slice(mid, length);



  return merge(mergeSort(leftArray), mergeSort(rightArray));


}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  while (leftArrayIndex <leftArray.length  && rightArrayIndex <rightArray.length ) {

    if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
      sortedArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex++;

    } else {
      sortedArray.push(rightArray[rightArrayIndex])
        rightArrayIndex++;
    }


  }
  return sortedArray.concat(leftArray.slice(leftArrayIndex)).concat(rightArray.slice(rightArrayIndex));
}

  module.exports = { merge, mergeSort };

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
  453, 546, 75, 67, 4342, 32
];
console.log(mergeSort(nums));