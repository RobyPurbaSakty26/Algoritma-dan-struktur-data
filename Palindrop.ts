function palindrom(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const str: string = x.toString();
  for (let i: number = 0; i < str.length; i++) {
    let firstWord: string = str.charAt(i);
    let lasttWord: string = str.charAt(str.length - i - 1);

    if (firstWord !== lasttWord) {
      return false;
    }
  }
  return true;
}

// console.log(palindrom(10));

const callFuction = (str: number, i: number): boolean => {
  if (str < 0) return false;
  const x: string = str.toString();
  console.log("i", i, "length", x.length);
  if (i < x.length / 2 - 1) {
    if (x.charAt(i) !== x.charAt(x.length - 1 - i)) {
      return false;
    } else {
      callFuction(str, i + 1);
    }
  }
  return true;
};

console.log(callFuction(1234554321, 0));
