let arr = [10, 2, 8, 9, 5, 6, 7];

const short = (arr) => {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    let swap = false;
    for (let j = 0; j < result.length - (i + 1); j++) {
      if (result[j] > result[j + 1]) {
        result[j] -= result[j + 1];
        result[j + 1] += result[j];
        result[j] = result[j + 1] - result[j];
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return result;
};
console.log(arr);
console.log(short(arr));
