function birthdayCakeCandles(candles) {
  // Write your code here
  let max = 0;
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
      count = 1;
    } else if (max === candles[i]) {
      count++;
    }
  }

  return count;
}

const arr = [4, 4, 1, 3];
console.log(birthdayCakeCandles(arr));
