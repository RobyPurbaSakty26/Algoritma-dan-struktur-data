function RomanToInteger(x: string): number {
  let result: number = 0;
  for (let i: number = 0; i < x.length; i++) {
    let current: string = x.charAt(i);
    let After: string = x.charAt(i + 1);
    const convertFirst = getValue(current);
    const convertBefore = getValue(After);

    if (convertFirst < convertBefore) {
      result -= convertFirst;
    } else {
      result += convertFirst;
    }
  }
  return result;
}

function getValue(x: string): number {
  switch (x) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

console.log(RomanToInteger("IV"));
