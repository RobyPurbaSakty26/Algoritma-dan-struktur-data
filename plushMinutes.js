function plusMinus(arr) {
  // Write your code here
  let postive = 0;
  let negative = 0;
  let zero = 0;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      postive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  postive = (postive / size).toFixed(6);
  negative = (negative / size).toFixed(6);
  zero = (zero / size).toFixed(6);

  return [[postive], [negative], [zero]];
}

const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));
