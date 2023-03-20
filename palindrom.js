const revers = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    let firstIndex = str.charAt(i);
    let lastIndex = str.charAt(str.length - i - 1);

    if (firstIndex !== lastIndex) {
      return false;
    }
  }
  return true;
};

const reversWithTem = (str) => {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp = temp + str.charAt(i);
  }
  console.log(temp, ":", str);
  if (temp === str) {
    return true;
  } else {
    return false;
  }
};

const callFunction = (str, i) => {
  if (str.length > i) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    } else {
      callFunction(str, i + 1);
    }
  }
  return true;
};
const str = "adal";

// console.log(revers(str));
// console.log(reversWithTem(str));

console.log(callFunction(str, 0));
