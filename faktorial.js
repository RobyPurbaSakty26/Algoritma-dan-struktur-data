const faktorial = (value) => {
  if (value <= 0) {
    return 1;
  }

  let result = 1;
  for (let i = value; i >= 1; i--) {
    result *= i;
  }
  return result;
};

const faktorialRecursive = (value) => {
  if (value <= 0) {
    return 1;
  } else {
    return value * faktorialRecursive(value - 1);
  }
};

const factorialTailRecursive = (total, value) => {
  if (value <= 0) {
    return total;
  } else {
    return factorialTailRecursive(total * value, value - 1);
  }
};

console.log(faktorial(10));
console.log(faktorialRecursive(10));
console.log(factorialTailRecursive(1, 10));
