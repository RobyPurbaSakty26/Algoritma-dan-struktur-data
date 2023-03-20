const num_arr = [2, 4, 5, 6];
const target = 11;

const TwoSum = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      if (i != j) {
        const sum = num[i] + num[j];
        console.log(sum);
        if (sum == target) {
          return [i, j];
        }
      }
    }
  }
  return [];
};

console.log(TwoSum(num_arr, target));
