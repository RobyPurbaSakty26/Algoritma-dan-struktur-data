const BeetwenTwoSet = (a, b) => {
  let firsh = a.length - 1;
  firsh = a[firsh];

  const end = b[0];
  let arr = [];

  for (let i = firsh; i <= end; i++) {
    arr.push(i);
  }

  for (let i = 0; i < a.length; i++) {
    arr = arr.filter((items) => items % a[i] == 0);
  }

  for (let i = 0; i < b.length; i++) {
    arr = arr.filter((items) => b[i] % items == 0);
  }

  return arr.length;
};

let a = [2, 6];
let b = [24, 36];
const data = BeetwenTwoSet(a, b);
console.log(data);
