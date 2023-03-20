function gradingStudents(grades) {
  // Write your code here

  let count = [];
  for (let i = 0; i < grades.length; i++) {
    let mod = grades[i] % 5;
    if (grades[i] > 37 && grades[i] % 5 > 2 && grades[i] <= 100) {
      let temp = grades[i] + 5 - mod;
      count[i] = temp;
    } else {
      count[i] = grades[i];
    }
  }

  return count;
}
const arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));
