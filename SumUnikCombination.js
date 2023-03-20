function Song(songs) {
  let result = 0;
  let data = songs;

  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i] != data[j]) {
        let sum = data[i] + data[j];
        console.log("i ", i, data[i], "j ", j, data[j], "\tSum ", sum);
        if (sum % 60 === 0) {
          result++;
        }
      }
    }
  }
  return result;
}

const songs = [30, 20, 150, 100, 40];
console.log(Song(songs));
