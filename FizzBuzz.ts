function FizzBuzz(arr: number): void {
  for (let i: number = 1; i <= arr; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(15);
