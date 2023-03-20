function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (
    ((x2 < x1 && v1 < v2) || (x2 > x1 && v1 > v2)) &&
    (x2 - x1) % (v1 - v2) == 0
  )
    return "YES";
  else return "NO";
}

const obj = kangaroo(0, 7, 4, 2);
console.log(obj);
