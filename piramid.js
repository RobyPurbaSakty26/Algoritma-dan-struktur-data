const piramid = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      let temp = num - i;
      if (temp >= j) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("#");
      }
    }
    console.log();
  }
};

piramid(4);
