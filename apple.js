function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  let applesOnHouse = 0;
  let orangesOnHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    const position = a + apples[i];
    if (position >= s && position <= t) {
      applesOnHouse++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    const position = b + oranges[i];
    if (position >= s && position <= t) {
      orangesOnHouse++;
    }
  }

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

// Example usage:
countApplesAndOranges(7, 11, [5, 15], [3, 2], [-2, 2, 1], [5, 6]);
// Output: 1 1
