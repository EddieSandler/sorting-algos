function bubbleSort(input) {
  let length=input.length
  let swapCount = 0;
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
}

function swap (arr, indexOne, indexTwo) {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;


};

module.exports = bubbleSort ;

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
  23, 2, 453, 546, 75, 67, 4342, 32
];
console.log(bubbleSort(nums))