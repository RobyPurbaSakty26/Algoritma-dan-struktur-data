const num_arr = [2, 4, 5, 6];
const target = 10;

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

// console.log(TwoSum(num_arr, target));

const FucTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, ":", j, "length", nums.length - i);
      const sum = nums[i] + nums[j] == target;
      if (sum) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(FucTwoSum([1, 3, 4, 5, 6], 11));
