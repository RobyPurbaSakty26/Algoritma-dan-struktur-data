const arr = [1, 2, 3];

const sumArr = (num) => {
  let temp = 0;
  for (let i = 0; i < num.length; i++) {
    temp += num[i];
  }
  return temp;
};

let sum = sumArr(arr);
console.log(sum);
