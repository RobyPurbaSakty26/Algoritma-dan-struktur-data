function diagonalDifference(arr) {
  // Write your code here
  //   let temp = 0;
  //   const size = arr.length;
  //   console.log(size);
  //   for (let i = 0; i < arr.length; i++) {
  //     temp += arr[i][i];

  //     temp -= arr[i][arr.length - i - 1];
  //     console.log(temp);
  //   }
  //   console.log(temp);
  //   return temp;

  //   let x = 0,
  //     y = 0,
  //     val = 0;
  //   arr.forEach((elem, key) => {
  //     if (elem[key] >= -100 && elem[key] <= 100) {
  //       console.log(x, "length ", key);
  //       x += elem[key];
  //       y += elem[elem.length - 1 - key];
  //     } else val = null;
  //   });
  //   console.log("nilai x ", x);
  //   console.log("nilai y ", y);
  //   val = Math.abs(x - y);
  //   return val;
  let d1 = 0;
  let d2 = 0;
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    d1 += arr[i][i];
    d2 += arr[i][arr.length - i - 1];
  }
  const result = Math.abs(d1 - d2);
  return result;
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
const result = diagonalDifference(arr);
console.log(result);

// console.log(arr[1][1]);
