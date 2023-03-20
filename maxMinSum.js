function MaxMinSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let size = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    size += arr[i];
  }
  min = size - min;
  max = size - max;
  console.log(max, min);
}
const arr = [1, 2, 3, 4, 5];
MaxMinSum(arr);
