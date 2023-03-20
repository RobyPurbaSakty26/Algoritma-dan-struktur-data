class Set {
  add() {
    return true;
  }
}

const arr = ["a", "b", "s", "f"];
const target = "f";
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  if (target === arr[i]) {
    console.log("ada");
  } else {
    console.log("tidak");
  }
}

let data = new Array(10);
console.log(data.length);
