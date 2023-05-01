function shortArr(arr: any): string {
  let data: number[] = arr;
  let result: string = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
    result = result + data[i].toString();
  }
  return result;
}

// console.log(shortArr([1, 10, 21, 15]));

console.log("b" > "A");
