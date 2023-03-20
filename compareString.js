let string = "hello";
const a = "a";
const b = "b";

const condition = a < b;

// const data = string.replace("l", "a");
// console.log("kondisi : ", condition);
// console.log("ini adalah index string : ", data);
const data = [];
for (let i = string.length - 1; i >= 0; i--) {
  let memory = string[i];
  console.log(string[i]);
  data.push(memory);
}
const nano = data.toString();
console.log(nano);

let newNano = nano.replaceAll(",", "");
console.log(newNano);
